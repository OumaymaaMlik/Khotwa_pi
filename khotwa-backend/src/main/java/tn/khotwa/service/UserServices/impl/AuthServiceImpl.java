package tn.khotwa.service.UserServices.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import tn.khotwa.dto.user.AuthResponse;
import tn.khotwa.dto.user.LoginRequest;
import tn.khotwa.dto.user.RegisterRequest;
import tn.khotwa.dto.user.UserResponse;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;
import tn.khotwa.exception.UserException.EmailAlreadyUsedException;
import tn.khotwa.exception.UserException.ForbiddenAdminCreationException;
import tn.khotwa.exception.UserException.InvalidCredentialsException;
import tn.khotwa.exception.UserException.InvalidRoleException;
import tn.khotwa.repository.UserRepo.UserRepository;
import tn.khotwa.security.JwtService;
import tn.khotwa.service.SubscriptionServices.ISubscriptionService;
import tn.khotwa.service.UserServices.AuthService;
import tn.khotwa.service.UserServices.UserMapper;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthServiceImpl implements AuthService {

    private final UserRepository       userRepository;
    private final PasswordEncoder      passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService           jwtService;
    private final UserMapper           userMapper;
    private final ISubscriptionService subscriptionService;

    @Override
    public UserResponse register(RegisterRequest request) {
        String normalizedEmail = normalizeEmail(request.emailAddress());
        if (userRepository.existsByEmailAddress(normalizedEmail)) {
            throw new EmailAlreadyUsedException("Email address is already used.");
        }

        Role role = resolvePublicRole(request.role());

        User user = User.builder()
                .avatar(trimToNull(request.avatar()))
                .emailAddress(normalizedEmail)
                .firstName(request.firstName().trim())
                .lastName(request.lastName().trim())
                .password(passwordEncoder.encode(request.password()))
                .phoneNumber(trimToNull(request.phoneNumber()))
                .role(role)
                .startup(trimToNull(request.startup()))
                .mustChangePassword(false)
                .build();
        userRepository.save(user);
        return userMapper.toResponse(user);
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.emailAddress(),
                            request.password()
                    )
            );
        } catch (AuthenticationException e) {
            throw new InvalidCredentialsException("Invalid credentials");
        }
        User user = userRepository.findByEmailAddress(normalizeEmail(request.emailAddress()))
                .orElseThrow(() -> new InvalidCredentialsException("Invalid credentials"));
        String jwt = jwtService.generateToken(user);
        return new AuthResponse(jwt, userMapper.toResponse(user));
    }

    private String normalizeEmail(String email) {
        return email == null ? null : email.trim().toLowerCase();
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }

    private Role resolvePublicRole(String role) {
        try {
            return Role.valueOf(role);
        } catch (Exception e) {
            throw new InvalidRoleException("Invalid role: " + role);
        }
    }
}
