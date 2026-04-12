package tn.khotwa.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    record ApiError(Instant timestamp, int status, String error, String message, Object details, String path) {
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiError> notFound(ResourceNotFoundException exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.NOT_FOUND, exception.getMessage(), null, request);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiError> forbidden(AccessDeniedException exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.FORBIDDEN, exception.getMessage(), null, request);
    }

    @ExceptionHandler(org.springframework.security.access.AccessDeniedException.class)
    public ResponseEntity<ApiError> securityForbidden(
            org.springframework.security.access.AccessDeniedException exception,
            HttpServletRequest request) {
        return buildResponse(HttpStatus.FORBIDDEN, "Forbidden access.", null, request);
    }

    @ExceptionHandler({InvalidCredentialsException.class, BadCredentialsException.class})
    public ResponseEntity<ApiError> unauthorized(RuntimeException exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.UNAUTHORIZED, "Invalid credentials.", null, request);
    }

    @ExceptionHandler(EmailAlreadyUsedException.class)
    public ResponseEntity<ApiError> emailAlreadyUsed(EmailAlreadyUsedException exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.CONFLICT, exception.getMessage(), null, request);
    }

    @ExceptionHandler({InvalidRoleException.class, ForbiddenAdminCreationException.class})
    public ResponseEntity<ApiError> invalidRole(RuntimeException exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.BAD_REQUEST, exception.getMessage(), null, request);
    }

    @ExceptionHandler(LastAdminDeletionException.class)
    public ResponseEntity<ApiError> lastAdminDeletion(LastAdminDeletionException exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.BAD_REQUEST, exception.getMessage(), null, request);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiError> validation(MethodArgumentNotValidException exception, HttpServletRequest request) {
        Map<String, String> errors = new LinkedHashMap<>();
        exception.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = error instanceof FieldError fieldError ? fieldError.getField() : error.getObjectName();
            errors.put(fieldName, error.getDefaultMessage());
        });
        return buildResponse(HttpStatus.BAD_REQUEST, "Validation failed.", errors, request);
    }

    @ExceptionHandler({MethodArgumentTypeMismatchException.class, HttpRequestMethodNotSupportedException.class})
    public ResponseEntity<ApiError> badRequest(Exception exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.BAD_REQUEST, exception.getMessage(), null, request);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> general(Exception exception, HttpServletRequest request) {
        return buildResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error.", null, request);
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
