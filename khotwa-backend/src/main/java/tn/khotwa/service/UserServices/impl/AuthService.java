package tn.khotwa.service.UserServices.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.khotwa.dto.projet.AuthLoginResponseDto;
import tn.khotwa.dto.projet.LoginRequest;
import tn.khotwa.dto.projet.RegisterRequest;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.repository.UserRepo.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional

public class AuthService implements tn.khotwa.service.UserServices.AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final tn.khotwa.security.JwtService jwtService;

    @Override
    public AuthLoginResponseDto register(RegisterRequest request) {
        String normalizedEmail = request.emailAddress().trim().toLowerCase();
        if (userRepository.findByEmailAddress(normalizedEmail).isPresent()) {
            throw new RuntimeException("Email address is already used.");
        }

        Role role = resolveRole(request.role());

        User user = User.builder()
                .firstName(request.firstName().trim())
                .lastName(request.lastName().trim())
                .emailAddress(normalizedEmail)
                .password(passwordEncoder.encode(request.password()))
                .role(role)
                .phoneNumber(request.phoneNumber())
                .nomAffiche(request.firstName() + " " + request.lastName())
                .mustChangePassword(false)
                .build();

        User savedUser = userRepository.save(user);
        String token = jwtService.generateToken(savedUser);
        return AuthLoginResponseDto.builder()
            .idUser(savedUser.getIdUser())
            .firstName(savedUser.getFirstName())
            .lastName(savedUser.getLastName())
            .emailAddress(savedUser.getEmailAddress())
            .role(savedUser.getRole())
            .phoneNumber(savedUser.getPhoneNumber())
            .region(savedUser.getRegion())
            .specialite(savedUser.getSpecialite())
            .disponibilite(savedUser.getDisponibilite())
            .nomAffiche(savedUser.getNomAffiche())
            .mustChangePassword(savedUser.isMustChangePassword())
            .token(token)
            .build();
    }

    @Override
    @Transactional(readOnly = true)
    public AuthLoginResponseDto login(LoginRequest request) {
        String normalizedEmail = request.emailAddress().trim().toLowerCase();
        User user = userRepository.findByEmailAddress(normalizedEmail)
                .orElseThrow(() -> new RuntimeException("Invalid credentials."));
        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials.");
        }
        String token = jwtService.generateToken(user);
        return AuthLoginResponseDto.builder()
            .idUser(user.getIdUser())
            .firstName(user.getFirstName())
            .lastName(user.getLastName())
            .emailAddress(user.getEmailAddress())
            .role(user.getRole())
            .phoneNumber(user.getPhoneNumber())
            .region(user.getRegion())
            .specialite(user.getSpecialite())
            .disponibilite(user.getDisponibilite())
            .nomAffiche(user.getNomAffiche())
            .mustChangePassword(user.isMustChangePassword())
            .token(token)
            .build();
    }

    private Role resolveRole(String rawRole) {
        if (!StringUtils.hasText(rawRole)) {
            return Role.ENTREPRENEUR;
        }
        try {
            return Role.valueOf(rawRole.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid role. Allowed roles are COACH, ENTREPRENEUR, ADMIN.");
        }
    }
}
