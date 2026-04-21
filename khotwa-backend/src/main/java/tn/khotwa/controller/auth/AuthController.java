package tn.khotwa.controller.auth;


import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import tn.khotwa.dto.projet.AuthLoginResponseDto;
import tn.khotwa.dto.projet.LoginRequest;
import tn.khotwa.dto.projet.RegisterRequest;
import tn.khotwa.service.UserServices.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AuthController {

        private final AuthService authService;

        @PostMapping("/register")
        public ResponseEntity<AuthLoginResponseDto> register(@Valid @RequestBody RegisterRequest request) {
                // Implementation will be added in the service layer
                // Placeholder for now
                return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(request));
        }

        @PostMapping("/login")
        public ResponseEntity<AuthLoginResponseDto> login(@Valid @RequestBody LoginRequest request) {
                // Implementation will be added in the service layer
                // Placeholder for now
                return ResponseEntity.ok(authService.login(request));
        }
}

