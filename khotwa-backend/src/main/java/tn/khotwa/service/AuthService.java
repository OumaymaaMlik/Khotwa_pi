package tn.khotwa.service;

import tn.khotwa.dto.user.AuthResponse;
import tn.khotwa.dto.user.LoginRequest;
import tn.khotwa.dto.user.RegisterRequest;
import tn.khotwa.dto.user.UserResponse;

public interface AuthService {

    UserResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}