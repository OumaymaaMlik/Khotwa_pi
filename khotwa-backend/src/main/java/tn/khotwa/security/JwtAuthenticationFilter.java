package tn.khotwa.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Map;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final AppUserDetailsService userDetailsService;
    private final ObjectMapper objectMapper;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        String header = request.getHeader("Authorization");
        if (!StringUtils.hasText(header) || !header.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        log.debug("Authorization header received for {} {}", request.getMethod(), request.getServletPath());

        String token = header.substring(7);
        try {
            String username = jwtService.extractUsername(token);
            if (StringUtils.hasText(username) && SecurityContextHolder.getContext().getAuthentication() == null) {
                AppUserPrincipal userPrincipal = (AppUserPrincipal) userDetailsService.loadUserByUsername(username);
                if (jwtService.isTokenValid(token, userPrincipal)) {
                    log.debug("Authenticated user from JWT: {}", userPrincipal.getUsername());
                    if (userPrincipal.isMustChangePassword() && isRestrictedWhilePasswordChangeRequired(request)) {
                        writePasswordChangeRequiredResponse(response);
                        return;
                    }

                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userPrincipal,
                        null,
                        userPrincipal.getAuthorities()
                    );
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        } catch (RuntimeException exception) {
            log.warn("JWT authentication failed for {} {}", request.getMethod(), request.getServletPath(), exception);
            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }

    private boolean isRestrictedWhilePasswordChangeRequired(HttpServletRequest request) {
        String path = request.getServletPath();
        return !"/api/users/me".equals(path)
            && !"/api/users/me/change-password".equals(path);
    }

    private void writePasswordChangeRequiredResponse(HttpServletResponse response) throws IOException {
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.setContentType("application/json");
        objectMapper.writeValue(response.getOutputStream(), Map.of(
            "status", HttpServletResponse.SC_FORBIDDEN,
            "error", "Forbidden",
            "message", "Password change is required before accessing this resource."
        ));
    }
}
