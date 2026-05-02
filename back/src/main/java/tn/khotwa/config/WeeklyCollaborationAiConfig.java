package tn.khotwa.config;

import com.google.genai.Client;
import io.micrometer.observation.ObservationRegistry;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.google.genai.GoogleGenAiChatModel;
import org.springframework.ai.google.genai.GoogleGenAiChatOptions;
import org.springframework.ai.model.tool.ToolCallingManager;
import org.springframework.ai.retry.RetryUtils;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.retry.support.RetryTemplate;

@Configuration
@RequiredArgsConstructor
@Conditional(GeminiApiKeyPresentCondition.class)
public class WeeklyCollaborationAiConfig {

    private final ObservationRegistry observationRegistry;
    private final ObjectProvider<ToolCallingManager> toolCallingManagerProvider;
    private final ObjectProvider<RetryTemplate> retryTemplateProvider;

    @Bean
    public ChatModel weeklyCollaborationAiChatModel(
            @Value("${spring.ai.google.genai.api-key}") String apiKey,
            @Value("${spring.ai.google.genai.chat.options.model:gemini-1.5-flash}") String model,
            @Value("${spring.ai.google.genai.chat.options.temperature:0.2}") Double temperature,
            @Value("${spring.ai.google.genai.chat.options.response-mime-type:application/json}") String responseMimeType) {
        Client genAiClient = Client.builder()
                .apiKey(apiKey)
                .build();

        GoogleGenAiChatOptions defaultOptions = GoogleGenAiChatOptions.builder()
                .model(model)
                .temperature(temperature)
                .responseMimeType(responseMimeType)
                .build();

        ToolCallingManager toolCallingManager = toolCallingManagerProvider.getIfAvailable(
                () -> ToolCallingManager.builder()
                        .observationRegistry(observationRegistry)
                        .build()
        );
        RetryTemplate retryTemplate = retryTemplateProvider.getIfAvailable(() -> RetryUtils.DEFAULT_RETRY_TEMPLATE);

        return GoogleGenAiChatModel.builder()
                .genAiClient(genAiClient)
                .defaultOptions(defaultOptions)
                .toolCallingManager(toolCallingManager)
                .retryTemplate(retryTemplate)
                .observationRegistry(observationRegistry)
                .build();
    }

    @Bean
    public ChatClient weeklyCollaborationAiChatClient(ChatModel weeklyCollaborationAiChatModel) {
        return ChatClient.create(weeklyCollaborationAiChatModel);
    }
}
