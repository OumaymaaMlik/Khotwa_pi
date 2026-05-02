package tn.khotwa.config;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

/**
 * Corrige automatiquement au démarrage les valeurs en minuscule
 * dans la colonne `type` de la table `evenement`.
 * Ex: "coaching" → "COACHING", "webinar" → "WEBINAR"
 */
@Component
public class EvenementDataMigration {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void fixEvenementTypeCase() {
        try {
            int updated = jdbcTemplate.update(
                    "UPDATE evenement SET type = UPPER(type) WHERE type != UPPER(type)"
            );
            if (updated > 0) {
                System.out.println("[EvenementDataMigration] Fixed " + updated + " row(s): type → UPPER(type)");
            }
        } catch (Exception e) {
            System.err.println("[EvenementDataMigration] Migration skipped: " + e.getMessage());
        }
    }
}