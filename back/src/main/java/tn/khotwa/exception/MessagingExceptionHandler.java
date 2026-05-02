package tn.khotwa.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import java.util.HashMap;
import java.util.Map;

// FIX: scoper cet advisor aux controllers messaging et conversations uniquement,
// pour éviter le conflit de priorité avec UserExceptionHandler (qui a basePackages).
// Sans basePackages, les deux advisors étaient en concurrence sur Exception.class
// et provoquaient un comportement imprévisible (500 au lieu de 400).
@RestControllerAdvice(basePackages = {
        "tn.khotwa.controller.messaging",
        "tn.khotwa.controller.talent",
        "tn.khotwa.controller.collaboration",
        "tn.khotwa.controller.projet",
        "tn.khotwa.controller.ressources",
        "tn.khotwa.controller.feedback",
        "tn.khotwa.controller.admin",
        "tn.khotwa.controller.auth",
        "tn.khotwa.controller.evenementController",
        "tn.khotwa.controller.subscriptionController",
        "tn.khotwa.controller.userController"
})
public class MessagingExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException ex) {
        String msg = ex.getMessage() != null ? ex.getMessage() : "Internal error";
        if (msg.contains("not found") || msg.contains("introuvable")) {
            return ResponseEntity.status(404).body(msg);
        }
        // FIX: "not a member" doit retourner 403, pas 500
        if (msg.contains("not part of this conversation") || msg.contains("not a member")) {
            return ResponseEntity.status(403).body(msg);
        }
        return ResponseEntity.internalServerError().body(msg);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.badRequest().body(errors);
    }
}