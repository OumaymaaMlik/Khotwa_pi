package tn.khotwa.controller.User;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.User.ChangePasswordRequest;
import tn.khotwa.dto.User.EntrepreneurSelectionResponse;
import tn.khotwa.dto.User.UpdateProfileRequest;
import tn.khotwa.dto.User.UpdateUserByAdminRequest;
import tn.khotwa.dto.User.UpdateUserPlanRequest;
import tn.khotwa.dto.User.UserResponse;
import tn.khotwa.service.User.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

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

    @GetMapping("/entrepreneurs")
    public ResponseEntity<List<EntrepreneurSelectionResponse>> getEntrepreneurs(
            @RequestParam(value = "search", required = false) String search) {
        return ResponseEntity.ok(userService.getEntrepreneursForCollaboration(search));
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
