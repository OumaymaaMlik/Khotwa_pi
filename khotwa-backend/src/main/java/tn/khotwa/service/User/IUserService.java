package tn.khotwa.service.User;

import tn.khotwa.DTO.user.ChangePasswordRequest;
import tn.khotwa.DTO.user.UpdateProfileRequest;
import tn.khotwa.DTO.user.UpdateUserByAdminRequest;
import tn.khotwa.DTO.user.UpdateUserPlanRequest;
import tn.khotwa.DTO.user.UserResponse;
import tn.khotwa.entity.User.User;

import java.util.List;

public interface IUserService {

    UserResponse getCurrentUserProfile();

    UserResponse updateCurrentUserProfile(UpdateProfileRequest request);

    void changeCurrentUserPassword(ChangePasswordRequest request);

    List<UserResponse> getAllUsers();

    UserResponse getUserById(Long idUser);

    UserResponse updateUserByAdmin(Long idUser, UpdateUserByAdminRequest request);

    void deleteUserByAdmin(Long idUser);

    UserResponse updateUserPlan(Long idUser, UpdateUserPlanRequest request);

    User getRequiredUser(Long idUser);
}
