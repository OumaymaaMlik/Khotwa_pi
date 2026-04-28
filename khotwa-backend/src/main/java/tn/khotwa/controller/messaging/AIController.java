package tn.khotwa.controller.messaging;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.DTO.messaging.ConversationSummary;
import tn.khotwa.DTO.messaging.SmartSuggestions;
import tn.khotwa.service.messaging.MessageService;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class AIController {

    private final MessageService messageService;

    @GetMapping("/recap")
    public ResponseEntity<ConversationSummary> getRecap(
            @RequestParam Long conversationId,
            @RequestParam Long userId) {
        return ResponseEntity.ok(messageService.generateRecap(conversationId, userId));
    }

    @GetMapping("/suggestions")
    public ResponseEntity<SmartSuggestions> getSuggestions(
            @RequestParam Long conversationId,
            @RequestParam Long currentUserId) {
        return ResponseEntity.ok(messageService.generateSuggestions(conversationId, currentUserId));
    }
}