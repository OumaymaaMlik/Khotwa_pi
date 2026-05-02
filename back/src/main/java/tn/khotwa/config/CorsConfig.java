package tn.khotwa.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

/**
 * Global CORS configuration — allows the Angular frontend (localhost:4200)
 * to communicate with the Spring Boot API (localhost:8084).
 *
 * The @CrossOrigin("*") on each controller already handles simple cases,
 * but this bean ensures headers like X-user-Id and X-user-Role
 * are allowed on preflight (OPTIONS) requests too.
 */
@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOriginPatterns(List.of("*"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));

        // AJOUTE "X-user-Plan" ICI
        config.setAllowedHeaders(List.of(
                "Content-Type",
                "Authorization",
                "X-user-Id",
                "X-user-Role",
                "X-user-Plan"  // <--- Très important pour débloquer la bibliothèque
        ));

        // Optionnel : expose-les aussi pour que le front puisse les lire dans les réponses
        config.setExposedHeaders(List.of("X-user-Id", "X-user-Role", "X-user-Plan"));

        config.setAllowCredentials(true);
        config.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}