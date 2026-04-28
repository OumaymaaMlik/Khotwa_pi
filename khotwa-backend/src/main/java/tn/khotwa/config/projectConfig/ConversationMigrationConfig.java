package tn.khotwa.config.projectConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import tn.khotwa.entity.Message;
import tn.khotwa.repository.messaging.MessageRepository;
import tn.khotwa.service.messaging.MessageService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class ConversationMigrationConfig implements CommandLineRunner {
    private final MessageRepository messageRepository;
    private final MessageService messageService;

    @Override
    public void run(String... args) {
        List<Message> messages = messageRepository.findAll();
        Map<String, Long> conversationByPair = new HashMap<>();

        for (Message message : messages) {
            if (message.getConversation() != null) continue;
            if (message.getReceiverId() == null || message.getSenderId() == null) continue;

            long a = Math.min(message.getSenderId(), message.getReceiverId());
            long b = Math.max(message.getSenderId(), message.getReceiverId());
            String key = a + ":" + b;

            Long conversationId = conversationByPair.get(key);
            if (conversationId == null) {
                conversationId = messageService.ensureDirectConversation(a, b, message.getSenderId(), "Legacy direct chat").getId();
                conversationByPair.put(key, conversationId);
            }

            var conversation = messageService.ensureDirectConversation(a, b, message.getSenderId(), "Legacy direct chat");
            message.setConversation(conversation);
            messageRepository.save(message);
        }
    }
}
