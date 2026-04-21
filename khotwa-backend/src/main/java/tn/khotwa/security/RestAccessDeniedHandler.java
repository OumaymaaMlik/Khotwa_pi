package tn.khotwa.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.Instant;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class RestAccessDeniedHandler implements AccessDeniedHandler {

    private final ObjectMapper objectMapper;

    @Override
    public void handle(
            HttpServletRequest request,
            HttpServletResponse response,
            org.springframework.security.access.AccessDeniedException accessDeniedException)
            throws IOException, ServletException {
        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType("application/json");
        objectMapper.writeValue(response.getOutputStream(), Map.of(
            "timestamp", Instant.now().toString(),
            "status", HttpStatus.FORBIDDEN.value(),
            "error", HttpStatus.FORBIDDEN.getReasonPhrase(),
            "message", "Forbidden access.",
            "path", request.getRequestURI()
        ));
    }
}