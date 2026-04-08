package tn.khotwa.biblio.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.biblio.dto.user.AdminUpdateUserRequest;
import tn.khotwa.biblio.dto.user.AuthResponse;
import tn.khotwa.biblio.dto.user.SignInRequest;
import tn.khotwa.biblio.dto.user.SignUpRequest;
import tn.khotwa.biblio.dto.user.UpdateProfileRequest;
import tn.khotwa.biblio.dto.user.UserResponse;
import tn.khotwa.biblio.security.AppUserPrincipal;
import tn.khotwa.biblio.service.user.IUserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final IUserService userService;

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> signUp(@Valid @RequestBody SignUpRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.signUp(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signIn(@Valid @RequestBody SignInRequest request) {
        return ResponseEntity.ok(userService.signIn(request));
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getMyProfile(
            @AuthenticationPrincipal AppUserPrincipal currentUser) {
        return ResponseEntity.ok(userService.getMyProfile(currentUser.getId()));
    }

    @PutMapping("/me")
    public ResponseEntity<UserResponse> updateMyProfile(
            @AuthenticationPrincipal AppUserPrincipal currentUser,
            @Valid @RequestBody UpdateProfileRequest request) {
        return ResponseEntity.ok(userService.updateMyProfile(currentUser.getId(), request));
    }

    @DeleteMapping("/me")
    public ResponseEntity<Void> deleteMyAccount(
            @AuthenticationPrincipal AppUserPrincipal currentUser) {
        userService.deleteMyAccount(currentUser.getId());
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> adminUpdateUser(
            @PathVariable Long id,
            @Valid @RequestBody AdminUpdateUserRequest request) {
        return ResponseEntity.ok(userService.adminUpdateUser(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> adminDeleteUser(@PathVariable Long id) {
        userService.adminDeleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
