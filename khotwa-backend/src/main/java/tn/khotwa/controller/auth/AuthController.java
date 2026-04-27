package tn.khotwa.controller.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.user.AuthResponse;
import tn.khotwa.dto.user.LoginRequest;
import tn.khotwa.dto.user.RegisterRequest;
import tn.khotwa.dto.user.UserResponse;
import tn.khotwa.service.UserServices.AuthService;
import tn.khotwa.service.GoogleAuthService;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final GoogleAuthService googleAuthService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
    @PostMapping("/google")
    public ResponseEntity<?> googleLogin(@RequestBody Map<String, String> payload) {
        try {
            String idToken = payload.get("idToken");
            String role = payload.get("role");
            String mode = payload.get("mode");
            return ResponseEntity.ok(authService.loginWithGoogle(idToken, role, mode));
        } catch (Exception e) {
            String message = e.getMessage() != null ? e.getMessage() : "Google authentication failed.";
            HttpStatus status = HttpStatus.UNAUTHORIZED;
            if (message.toLowerCase().contains("already exists") || message.toLowerCase().contains("already used")) {
                status = HttpStatus.CONFLICT;
            } else if (message.toLowerCase().contains("sign up first") || message.toLowerCase().contains("not found")) {
                status = HttpStatus.NOT_FOUND;
            } else if (message.toLowerCase().contains("invalid") || message.toLowerCase().contains("required")) {
                status = HttpStatus.BAD_REQUEST;
            }
            return ResponseEntity.status(status).body(Map.of("message", message));
        }
    }
}