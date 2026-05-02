package tn.khotwa.controller.messaging;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.config.websocket.OnlineUserStore;
import tn.khotwa.config.websocket.WebSocketEventPublisher;
import tn.khotwa.dto.messaging.*;
import tn.khotwa.entity.Conversation;
import tn.khotwa.entity.ConversationMemberRole;
import tn.khotwa.entity.ConversationParticipant;
import tn.khotwa.repository.messaging.ConversationParticipantRepository;
import tn.khotwa.repository.messaging.ConversationRepository;
import tn.khotwa.service.messaging.MessageService;

import java.util.List;

@RestController
@RequestMapping("/api/conversations")
@RequiredArgsConstructor
public class ConversationController {
    private final MessageService messageService;
    private final ConversationRepository conversationRepository;
    private final ConversationParticipantRepository participantRepository;
    private final OnlineUserStore onlineUserStore;
    private final WebSocketEventPublisher webSocketEventPublisher;

    @GetMapping("/me")
    public ResponseEntity<List<ConversationDTO>> getMine(@RequestParam Long userId) {
        return ResponseEntity.ok(messageService.getConversationsForUser(userId, onlineUserStore::isOnline));
    }

    @PostMapping
    public ResponseEntity<ConversationDTO> createConversation(@Valid @RequestBody CreateConversationRequest request,
                                                              @RequestParam Long actorId) {
        Conversation conversation = new Conversation();
        conversation.setType(request.getType());
        conversation.setTitle(request.getTitle());
        conversation.setProjectId(request.getProjectId());
        conversation.setCreatedBy(actorId);
        Conversation saved = conversationRepository.save(conversation);

        for (Long participantId : request.getParticipantIds()) {
            ConversationParticipant p = new ConversationParticipant();
            p.setConversation(saved);
            p.setUserId(participantId);
            p.setRole(participantId.equals(actorId) ? ConversationMemberRole.OWNER : ConversationMemberRole.MEMBER);
            participantRepository.save(p);
        }

        List<ConversationDTO> mine = messageService.getConversationsForUser(actorId, onlineUserStore::isOnline);
        ConversationDTO dto = mine.stream().filter(c -> c.getId().equals(saved.getId())).findFirst().orElse(null);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/direct/initiate")
    public ResponseEntity<ConversationDTO> initiateDirect(@RequestParam Long senderId, @RequestParam Long receiverId) {
        // FIX: interdire de s'envoyer un message à soi-même (cause 500 côté service)
        if (senderId.equals(receiverId)) {
            return ResponseEntity.badRequest().build();
        }
        // FIX: ensureDirectConversation crée la conversation ET ajoute les participants
        // avant d'appeler sendSystemMessage qui appelle ensureMember.
        // L'ordre est correct ici — on ne touche plus à rien.
        Conversation conversation = messageService.ensureDirectConversation(senderId, receiverId, senderId, "Direct conversation");
        messageService.sendSystemMessageToConversation(
                conversation.getId(),
                senderId,
                "Hello! I saw your profile on the Talent Marketplace and would like to connect."
        );
        ConversationDTO dto = messageService.getConversationsForUser(senderId, onlineUserStore::isOnline).stream()
                .filter(c -> c.getId().equals(conversation.getId()))
                .findFirst()
                .orElse(null);
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/direct/ensure")
    public ResponseEntity<ConversationDTO> ensureDirect(@RequestParam Long senderId, @RequestParam Long receiverId) {
        // FIX: guard senderId != receiverId
        if (senderId.equals(receiverId)) {
            return ResponseEntity.badRequest().build();
        }
        Conversation conversation = messageService.ensureDirectConversation(senderId, receiverId, senderId, "Direct conversation");
        ConversationDTO dto = messageService.getConversationsForUser(senderId, onlineUserStore::isOnline).stream()
                .filter(c -> c.getId().equals(conversation.getId()))
                .findFirst()
                .orElse(null);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{conversationId}/messages")
    public ResponseEntity<Page<MessageDTO>> getMessages(@PathVariable Long conversationId,
                                                        @RequestParam Long userId,
                                                        @RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "50") int size) {
        return ResponseEntity.ok(messageService.getMessagesForConversation(conversationId, userId, page, size));
    }

    @PostMapping("/{conversationId}/messages")
    public ResponseEntity<MessageDTO> sendMessage(@PathVariable Long conversationId,
                                                  @Valid @RequestBody SendConversationMessageRequest request) {
        return ResponseEntity.ok(messageService.sendConversationMessage(conversationId, request));
    }

    @PostMapping("/{conversationId}/typing")
    public ResponseEntity<Void> typing(@PathVariable Long conversationId, @Valid @RequestBody TypingRequest request) {
        webSocketEventPublisher.publishConversationTyping(conversationId, request.getUserId(), request.isTyping());
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{conversationId}/read")
    public ResponseEntity<Void> markRead(@PathVariable Long conversationId, @RequestParam Long userId) {
        messageService.markConversationRead(conversationId, userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{conversationId}/presence")
    public ResponseEntity<ConversationPresenceDTO> getPresence(@PathVariable Long conversationId, @RequestParam Long userId) {
        messageService.getMessagesForConversation(conversationId, userId, 0, 1);
        List<ConversationParticipant> participants = participantRepository.findByConversationIdAndActiveTrue(conversationId);
        int online = (int) participants.stream().filter(p -> onlineUserStore.isOnline(p.getUserId())).count();
        ConversationPresenceDTO dto = new ConversationPresenceDTO();
        dto.setConversationId(conversationId);
        dto.setOnlineCount(online);
        dto.setTotalCount(participants.size());
        dto.setOnlineUserIds(participants.stream().filter(p -> onlineUserStore.isOnline(p.getUserId())).map(ConversationParticipant::getUserId).toList());
        return ResponseEntity.ok(dto);
    }
}