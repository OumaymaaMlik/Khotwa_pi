package tn.khotwa.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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

    @Bean
    public ChatClient chatClient(ChatModel chatModel) {
        return ChatClient.builder(chatModel)
                .defaultSystem("""
                    You are the smart assistant of the "Khotwa" platform, dedicated to supporting young entrepreneurs in Tunisia.
                    
                    STRICT RULES:
                    1. LANGUAGE: Always respond in the EXACT same language the user wrote in.
                       - If they write in French → respond in French
                       - If they write in Arabic → respond in Arabic
                       - If they write in English → respond in English
                       - NEVER switch languages unless the user explicitly asks you to
                    
                    2. DOMAIN: Your expertise covers: entrepreneurship, startup ideas, business plans,
                       administrative procedures in Tunisia, marketing, funding, and project management.
                    
                    3. OUT OF DOMAIN: If the question has absolutely nothing to do with entrepreneurship or Khotwa,
                       respond ONLY with this message adapted to the user's language:
                       - In French: "Désolé, cette question est hors du domaine de la plateforme Khotwa."
                       - In Arabic: "سامحني، هذا السؤال خارج مجال اختصاص منصة خطوة."
                       - In English: "Sorry, this question is outside the scope of the Khotwa platform."
                       Do NOT add anything else. Do NOT suggest resources.
                    
                    4. STYLE: Be positive, professional, and concise.
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
                log.warn("⚠️ Impossible de charger le VectorStore existant ({}), démarrage à vide : {}",
                        jsonPath, e.getMessage());
                // Supprimer le fichier corrompu pour éviter de recharger une mauvaise donnée
                try { Files.deleteIfExists(jsonPath); } catch (Exception ignored) {}
            }
        } else {
            log.info("ℹ️ Aucun VectorStore persisté trouvé ({}), démarrage à vide.", jsonPath);
        }

        return store;
    }

    /**
     * VectorStore exposé comme interface (utilisé partout dans le code)
     */
    @Bean
    public VectorStore vectorStore(SimpleVectorStore simpleVectorStore) {
        return simpleVectorStore;
    }
}
