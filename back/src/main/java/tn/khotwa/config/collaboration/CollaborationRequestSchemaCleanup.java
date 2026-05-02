package tn.khotwa.config.collaboration;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CollaborationRequestSchemaCleanup implements ApplicationRunner {

    private final JdbcTemplate jdbcTemplate;

    @Override
    public void run(ApplicationArguments args) {
        dropLegacyTypeColumn();
        renameRespondedAtToProcessedAt();
        ensureScenarioColumnExists();
        backfillScenarioValues();
        ensurePendingLookupIndexExists();
    }

    private void dropLegacyTypeColumn() {
        Integer legacyTypeColumnCount = jdbcTemplate.queryForObject(
                """
                select count(*)
                from information_schema.columns
                where table_schema = database()
                  and table_name = 'collaboration_requests'
                  and column_name = 'type'
                """,
                Integer.class
        );

        if (legacyTypeColumnCount != null && legacyTypeColumnCount > 0) {
            jdbcTemplate.execute("alter table collaboration_requests drop column type");
        }
    }

    private void renameRespondedAtToProcessedAt() {
        Integer respondedAtColumnCount = jdbcTemplate.queryForObject(
                """
                select count(*)
                from information_schema.columns
                where table_schema = database()
                  and table_name = 'collaboration_requests'
                  and column_name = 'responded_at'
                """,
                Integer.class
        );
        Integer processedAtColumnCount = jdbcTemplate.queryForObject(
                """
                select count(*)
                from information_schema.columns
                where table_schema = database()
                  and table_name = 'collaboration_requests'
                  and column_name = 'processed_at'
                """,
                Integer.class
        );

        if (respondedAtColumnCount != null
                && respondedAtColumnCount > 0
                && (processedAtColumnCount == null || processedAtColumnCount == 0)) {
            jdbcTemplate.execute("alter table collaboration_requests rename column responded_at to processed_at");
        }
    }

    private void ensureScenarioColumnExists() {
        Integer scenarioColumnCount = jdbcTemplate.queryForObject(
                """
                select count(*)
                from information_schema.columns
                where table_schema = database()
                  and table_name = 'collaboration_requests'
                  and column_name = 'scenario'
                """,
                Integer.class
        );

        if (scenarioColumnCount != null && scenarioColumnCount == 0) {
            jdbcTemplate.execute("alter table collaboration_requests add column scenario varchar(64) null");
        }
    }

    private void backfillScenarioValues() {
        jdbcTemplate.execute(
                """
                update collaboration_requests request
                join collaborations collaboration on collaboration.id = request.target_collaboration_id
                join projets project on project.id = collaboration.project_id
                set request.scenario = case
                    when request.target_user_id = project.entrepreneur_id then 'JOIN_REQUEST'
                    else 'COLLAB_INVITATION'
                end
                where request.target_collaboration_id is not null
                  and request.scenario is null
                """
        );
    }

    private void ensurePendingLookupIndexExists() {
        Integer pendingLookupIndexCount = jdbcTemplate.queryForObject(
                """
                select count(*)
                from information_schema.statistics
                where table_schema = database()
                  and table_name = 'collaboration_requests'
                  and index_name = 'idx_collaboration_request_pending_lookup'
                """,
                Integer.class
        );

        if (pendingLookupIndexCount != null && pendingLookupIndexCount == 0) {
            jdbcTemplate.execute(
                    """
                    create index idx_collaboration_request_pending_lookup
                    on collaboration_requests (
                        requester_user_id,
                        target_user_id,
                        target_collaboration_id,
                        scenario,
                        status
                    )
                    """
            );
        }
    }
}

