package tn.khotwa.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class StatutTacheEnumMigrationConfig implements ApplicationRunner {

    private static final String ENUM_VALUES = "'A_FAIRE','EN_COURS','A_CORRIGER','EN_CORRECTION','TERMINEE','EN_RETARD','BLOQUEE'";

    private final JdbcTemplate jdbcTemplate;

    @Override
    public void run(ApplicationArguments args) {
        migrateEnumColumn("taches", "statut_tache");
        migrateEnumColumn("sous_taches", "statut_sous_tache");
    }

    private void migrateEnumColumn(String tableName, String columnName) {
        String sql = "ALTER TABLE " + tableName + " MODIFY COLUMN " + columnName + " ENUM(" + ENUM_VALUES + ") NOT NULL";

        try {
            jdbcTemplate.execute(sql);
            log.info("Enum values updated for {}.{}", tableName, columnName);
        } catch (DataAccessException ex) {
            // Do not block startup if DB engine differs or table is not ready yet.
            log.warn("Could not update enum values for {}.{}: {}", tableName, columnName, ex.getMessage());
        }
    }
}
