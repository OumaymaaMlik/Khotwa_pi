package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.talent.AuditLog;
import tn.khotwa.repository.repotalent.AuditLogRepository;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuditLogService {

    private final AuditLogRepository auditLogRepository;

    public void logAction(String action, String targetId, String performedBy, String details) {
        AuditLog log = AuditLog.builder()
                .action(action)
                .targetId(targetId)
                .performedBy(performedBy)
                .timestamp(LocalDateTime.now())
                .details(details)
                .build();
        auditLogRepository.save(log);
    }
}
