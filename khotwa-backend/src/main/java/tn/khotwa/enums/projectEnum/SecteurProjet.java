package tn.khotwa.enums.projectEnum;

import java.text.Normalizer;
import java.util.Locale;

public enum SecteurProjet {
    TECHNOLOGIE_LOGICIEL,
    FINTECH,
    ECOMMERCE_RETAIL,
    SANTE_MEDTECH,
    EDUCATION_EDTECH,
    AGRICULTURE_AGRITECH,
    ENERGIE_CLEANTECH,
    MOBILITE_LOGISTIQUE,
    INDUSTRIE_MANUFACTURING,
    IMMOBILIER_PROPTECH,
    TOURISME_HOSPITALITE,
    MEDIA_COMMUNICATION,
    IA_DATA,
    CYBERSECURITE,
    SERVICES_B2B;

    public static SecteurProjet fromValue(String raw) {
        if (raw == null || raw.isBlank()) {
            return SERVICES_B2B;
        }

        String normalized = normalize(raw);
        try {
            return valueOf(normalized);
        } catch (IllegalArgumentException ignored) {
            return switch (normalized) {
                case "EDTECH", "EDUCATION", "FORMATION" -> EDUCATION_EDTECH;
                case "HEALTH", "HEALTHTECH", "SANTE" -> SANTE_MEDTECH;
                case "AGRITECH", "AGRICULTURE" -> AGRICULTURE_AGRITECH;
                case "GREENTECH", "CLEAN_TECH", "CLEANENERGY", "ENERGY" -> ENERGIE_CLEANTECH;
                case "AI", "DATA", "AI_DATA" -> IA_DATA;
                case "LOGICIEL", "SOFTWARE", "TECH" -> TECHNOLOGIE_LOGICIEL;
                default -> SERVICES_B2B;
            };
        }
    }

    private static String normalize(String raw) {
        String ascii = Normalizer.normalize(raw, Normalizer.Form.NFD).replaceAll("\\p{M}", "");
        return ascii
            .trim()
            .toUpperCase(Locale.ROOT)
            .replace('&', '_')
            .replace('-', '_')
            .replace('/', '_')
            .replace(' ', '_')
            .replaceAll("[^A-Z0-9_]", "")
            .replaceAll("_+", "_");
    }
}
