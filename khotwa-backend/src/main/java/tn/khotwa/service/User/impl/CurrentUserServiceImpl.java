
package tn.khotwa.service.User.impl;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;

import tn.khotwa.repository.UserRepo.UserRepository;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;


import tn.khotwa.exception.UserException.ResourceNotFoundException;

import tn.khotwa.security.AppUserPrincipal;
import tn.khotwa.service.User.CurrentUserService;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CurrentUserServiceImpl implements CurrentUserService {

    private final UserRepository userRepository;

    @Override
    public User getCurrentUser() {
        return getUserById(getCurrentPrincipal().getIdUser());
    }

    @Override
    public Long getCurrentUserId() {
        return getCurrentPrincipal().getIdUser();
    }

    @Override
    public Role getCurrentUserRole() {
        return getCurrentPrincipal().getRole();
    }

    @Override
    public User getUserById(Long idUser) {
        return userRepository.findById(idUser)
            .orElseThrow(() -> new ResourceNotFoundException("User", idUser));
    }

    private AppUserPrincipal getCurrentPrincipal() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof AppUserPrincipal principal)) {
            throw new InsufficientAuthenticationException("No authenticated user found.");
        }
        return principal;
    }
}