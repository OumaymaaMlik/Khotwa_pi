package tn.khotwa.biblio.service.user;

import tn.khotwa.biblio.dto.user.AdminUpdateUserRequest;
import tn.khotwa.biblio.dto.user.AuthResponse;
import tn.khotwa.biblio.dto.user.SignInRequest;
import tn.khotwa.biblio.dto.user.SignUpRequest;
import tn.khotwa.biblio.dto.user.UpdateProfileRequest;
import tn.khotwa.biblio.dto.user.UserResponse;

import java.util.List;

public interface IUserService {

    UserResponse signUp(SignUpRequest request);

    AuthResponse signIn(SignInRequest request);

    UserResponse getMyProfile(Long userId);

    UserResponse updateMyProfile(Long userId, UpdateProfileRequest request);

    void deleteMyAccount(Long userId);

    List<UserResponse> getAllUsers();

    UserResponse getUserById(Long userId);

    UserResponse adminUpdateUser(Long userId, AdminUpdateUserRequest request);

    void adminDeleteUser(Long userId);
}
