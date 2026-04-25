package tn.khotwa.service.UserServices;

import tn.khotwa.dto.user.ChangePasswordRequest;
import tn.khotwa.dto.user.UpdateProfileRequest;
import tn.khotwa.dto.user.UpdateUserByAdminRequest;
import tn.khotwa.dto.user.UpdateUserPlanRequest;
import tn.khotwa.dto.user.UserResponse;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.entity.evenement.Evenement;

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


    List<Evenement> getCreatedEvents(long idUser);
    List<Evenement> getParticipatedEvents(long  idUser);
}
