package tn.khotwa.service.UserServices;

import tn.khotwa.dto.projet.AuthLoginResponseDto;
import tn.khotwa.dto.projet.LoginRequest;
import tn.khotwa.dto.projet.RegisterRequest;

public interface AuthService {
    AuthLoginResponseDto register(RegisterRequest request);
    AuthLoginResponseDto login(LoginRequest request);
}
