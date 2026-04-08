package tn.khotwa.biblio.dto.user;

public record AuthResponse(String token, long expiresIn, UserResponse user) {
}