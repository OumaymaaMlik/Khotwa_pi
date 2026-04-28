package tn.khotwa.service.User;

import tn.khotwa.DTO.user.AuthResponse;
import tn.khotwa.DTO.user.LoginRequest;
import tn.khotwa.DTO.user.RegisterRequest;
import tn.khotwa.DTO.user.UserResponse;

public interface AuthService {

    UserResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
    AuthResponse loginWithGoogle(String idToken, String role, String mode);
}