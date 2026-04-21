package tn.khotwa.service.User;

import tn.khotwa.dto.User.ChangePasswordRequest;
import tn.khotwa.dto.User.UpdateProfileRequest;
import tn.khotwa.dto.User.UpdateUserByAdminRequest;
import tn.khotwa.dto.User.UpdateUserPlanRequest;
import tn.khotwa.dto.User.EntrepreneurSelectionResponse;
import tn.khotwa.dto.User.UserResponse;
import tn.khotwa.entity.User.User;

import java.util.List;

public interface UserService {

    UserResponse getCurrentUserProfile();

    UserResponse updateCurrentUserProfile(UpdateProfileRequest request);

    void changeCurrentUserPassword(ChangePasswordRequest request);

    List<UserResponse> getAllUsers();

    UserResponse getUserById(Long idUser);

    UserResponse updateUserByAdmin(Long idUser, UpdateUserByAdminRequest request);

    void deleteUserByAdmin(Long idUser);

    UserResponse updateUserPlan(Long idUser, UpdateUserPlanRequest request);

    List<EntrepreneurSelectionResponse> getEntrepreneursForCollaboration(String search);

    User getRequiredUser(Long idUser);
}
