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
 * but this bean ensures headers like X-User-Id and X-User-Role
 * are allowed on preflight (OPTIONS) requests too.
 */
@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOriginPatterns(List.of("*"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));

        // AJOUTE "X-User-Plan" ICI
        config.setAllowedHeaders(List.of(
                "Content-Type",
                "Authorization",
                "X-User-Id",
                "X-User-Role",
                "X-User-Plan"  // <--- Très important pour débloquer la bibliothèque
        ));

        // Optionnel : expose-les aussi pour que le front puisse les lire dans les réponses
        config.setExposedHeaders(List.of("X-User-Id", "X-User-Role", "X-User-Plan"));

        config.setAllowCredentials(false);
        config.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}