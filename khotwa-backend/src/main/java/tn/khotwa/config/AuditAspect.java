package tn.khotwa.config;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import tn.khotwa.service.sertalent.AuditLogService;

@Aspect
@Component
public class AuditAspect {

    private final AuditLogService auditLogService;

    public AuditAspect(AuditLogService auditLogService) {
        this.auditLogService = auditLogService;
    }

    @AfterReturning("@annotation(auditable)")
    public void logAuditActivity(JoinPoint joinPoint, Auditable auditable) {
        String action = auditable.action();
        String methodName = joinPoint.getSignature().getName();
        String details = "Executed: " + methodName;
        
        // Simple extraction of ID if present (assuming ID is first argument for simple controllers)
        String targetId = "N/A";
        Object[] args = joinPoint.getArgs();
        if (args != null && args.length > 0 && args[0] != null) {
            targetId = args[0].toString();
        }

        auditLogService.logAction(action, targetId, "system", details);
    }
}
