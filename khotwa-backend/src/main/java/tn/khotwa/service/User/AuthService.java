package tn.khotwa.service.User;

import tn.khotwa.dto.User.AuthResponse;
import tn.khotwa.dto.User.LoginRequest;
import tn.khotwa.dto.User.RegisterRequest;
import tn.khotwa.dto.User.UserResponse;

public interface AuthService {

    UserResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}