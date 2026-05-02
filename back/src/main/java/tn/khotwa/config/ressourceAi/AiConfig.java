package tn.khotwa.config.ressourceAi;

import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Qualifier;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Configuration IA — FIX :
 *  1. SimpleVectorStore chargé depuis un fichier JSON persistant au démarrage
 *     → les embeddings survivent au redémarrage du serveur
 *  2. Le fichier JSON est rechargé à chaque démarrage si présent
 *     → aucune perte de données même après un restart
 *
 * Le chemin du fichier JSON est configurable via app.vector-store.path
 * (valeur par défaut : ./vector-store.json dans le répertoire de travail)
 */
@Configuration
@Slf4j
public class AiConfig {

    @Value("${app.vector-store.path:./vector-store.json}")
    private String vectorStorePath;

    @Bean("geminiChatClient")
    public ChatClient geminiChatClient(@Qualifier("googleGenAiChatModel") ChatModel chatModel) {
        return ChatClient.builder(chatModel)
                .defaultSystem("""
                    You are the smart assistant of the "Khotwa" platform, dedicated to supporting young entrepreneurs in Tunisia.
                    
                    STRICT RULES:
                    
                    1. DEFAULT LANGUAGE: Your default language is English. If you are unsure or starting a conversation, use English.
                    
                    2. MULTILINGUAL SUPPORT: You support French, English, and Tunisian Arabic (Darija).
                       - Always respond in the SAME language the user uses.
                       - If they speak Tunisian/Darija, respond in Tunisian/Darija (using Arabic script or Latin/Chat script as used by the user).
                    
                    3. SUMMARIES: Regardless of the input language, whenever you are asked to provide a SUMMARY of a document, discussion, or project, you MUST generate it in ENGLISH.
                    
                    4. DOMAIN: Your expertise covers: entrepreneurship, startup ideas, business plans,
                       administrative procedures in Tunisia, marketing, funding, and project management.
                    
                    5. OUT OF DOMAIN: If the question has absolutely nothing to do with entrepreneurship or Khotwa,
                       respond ONLY with this message adapted to the user's language:
                       - French: "Désolé, cette question est hors du domaine de la plateforme Khotwa."
                       - Arabic/Tunisian: "سامحني، هذا السؤال خارج مجال اختصاص منصة خطوة."
                       - English: "Sorry, this question is outside the scope of the Khotwa platform."
                       Do NOT add anything else.
                    
                    6. STYLE: Be positive, professional, and concise.
                    """)
                .build();
    }

    /**
     * FIX 1 — VectorStore persistant sur disque
     * Charge le fichier JSON si existant, sinon démarre vide (sera rempli par l'indexation).
     */
    @Bean
    public SimpleVectorStore simpleVectorStore(EmbeddingModel embeddingModel) {
        SimpleVectorStore store = SimpleVectorStore.builder(embeddingModel).build();
        Path jsonPath = Paths.get(vectorStorePath).toAbsolutePath();
        File jsonFile = jsonPath.toFile();

        if (jsonFile.exists() && jsonFile.length() > 0) {
            try {
                store.load(jsonFile);
                log.info("✅ VectorStore chargé depuis : {} ({} octets)", jsonPath, jsonFile.length());
            } catch (Exception e) {
                log.warn("⚠️ Impossible de charger le VectorStore existant, démarrage à vide : {}", e.getMessage());
                try { Files.deleteIfExists(jsonPath); } catch (Exception ignored) {}
            }
        }
        return store;
    }

    @Bean
    public VectorStore vectorStore(SimpleVectorStore simpleVectorStore) {
        return simpleVectorStore;
    }
}
