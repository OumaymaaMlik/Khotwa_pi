package tn.khotwa.controller.messaging;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.messaging.ConversationSummary;
import tn.khotwa.dto.messaging.SmartSuggestions;
import tn.khotwa.service.messaging.MessageService;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class AIController {

    private final MessageService messageService;

    @GetMapping("/recap")
    public ResponseEntity<ConversationSummary> getRecap(@RequestParam Long user1, @RequestParam Long user2) {
        return ResponseEntity.ok(messageService.generateRecap(user1, user2));
    }

    @GetMapping("/suggestions")
    public ResponseEntity<SmartSuggestions> getSuggestions(
            @RequestParam Long currentUserId,
            @RequestParam Long otherUserId) {
        return ResponseEntity.ok(messageService.generateSuggestions(currentUserId, otherUserId));
    }
}