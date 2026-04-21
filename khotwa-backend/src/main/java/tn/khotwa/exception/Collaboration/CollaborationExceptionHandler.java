package tn.khotwa.exception.Collaboration;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.servlet.http.HttpServletRequest;
import java.time.Instant;
import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = "tn.khotwa.controller.Collaboration")
public class CollaborationExceptionHandler {

    @JsonInclude(JsonInclude.Include.NON_NULL)
    record ApiError(Instant timestamp, int status, String error, String message, Object details, String path) {
    }

    @ExceptionHandler({IllegalStateException.class, BusinessException.class})
    public ResponseEntity<ApiError> handleIllegalStateException(
            RuntimeException exception,
            HttpServletRequest request) {
        return buildResponse(HttpStatus.BAD_REQUEST, exception.getMessage(), null, request);
    }

    @ExceptionHandler({AccessDeniedException.class, ForbiddenOperationException.class})
    public ResponseEntity<ApiError> handleAccessDeniedException(
            RuntimeException exception,
            HttpServletRequest request) {
        return buildResponse(HttpStatus.FORBIDDEN, exception.getMessage(), null, request);
    }

    @ExceptionHandler({NoSuchElementException.class, ResourceNotFoundException.class})
    public ResponseEntity<ApiError> handleNoSuchElementException(
            NoSuchElementException exception,
            HttpServletRequest request) {
        return buildResponse(HttpStatus.NOT_FOUND, exception.getMessage(), null, request);
    }

    private ResponseEntity<ApiError> buildResponse(
            HttpStatus status,
            String message,
            Object details,
            HttpServletRequest request) {
        return ResponseEntity.status(status)
            .body(new ApiError(
                Instant.now(),
                status.value(),
                status.getReasonPhrase(),
                message,
                details,
                request.getRequestURI()
            ));
    }
}