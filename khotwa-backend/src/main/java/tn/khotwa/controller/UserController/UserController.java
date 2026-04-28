package tn.khotwa.controller.UserController;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.DTO.user.ChangePasswordRequest;
import tn.khotwa.DTO.user.UpdateProfileRequest;
import tn.khotwa.DTO.user.UpdateUserByAdminRequest;
import tn.khotwa.DTO.user.UpdateUserPlanRequest;
import tn.khotwa.DTO.user.UserResponse;
import tn.khotwa.service.User.impl.UserServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")

@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/me")
    public ResponseEntity<UserResponse> getMyProfile() {
        return ResponseEntity.ok(userService.getCurrentUserProfile());
    }

    @PutMapping("/me")
    public ResponseEntity<UserResponse> updateMyProfile(@Valid @RequestBody UpdateProfileRequest request) {
        return ResponseEntity.ok(userService.updateCurrentUserProfile(request));
    }

    @PutMapping("/me/change-password")
    public ResponseEntity<Void> changePassword(@Valid @RequestBody ChangePasswordRequest request) {
        userService.changeCurrentUserPassword(request);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> updateUserByAdmin(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserByAdminRequest request) {
        return ResponseEntity.ok(userService.updateUserByAdmin(id, request));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUserByAdmin(@PathVariable Long id) {
        userService.deleteUserByAdmin(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/plan")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> updateUserPlan(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserPlanRequest request) {
        return ResponseEntity.ok(userService.updateUserPlan(id, request));
    }
}
