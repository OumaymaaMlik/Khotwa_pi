package tn.khotwa.service.UserServices;

import tn.khotwa.dto.user.AuthResponse;
import tn.khotwa.dto.user.LoginRequest;
import tn.khotwa.dto.user.RegisterRequest;
import tn.khotwa.dto.user.UserResponse;

public interface AuthService {

    UserResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
    AuthResponse loginWithGoogle(String idToken, String role, String mode);
}