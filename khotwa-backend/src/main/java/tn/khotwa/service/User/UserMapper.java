package tn.khotwa.service.User;

import org.springframework.stereotype.Component;
import tn.khotwa.DTO.user.UserResponse;
import tn.khotwa.entity.User.User;

@Component
public class UserMapper {

    public UserResponse toResponse(User user) {
        return new UserResponse(
                user.getIdUser(),
                user.getAvatar(),
                user.getEmailAddress(),
                user.getFirstName(),
                user.getLastName(),
                user.getPendingPlan(),
                user.getPhoneNumber(),
                user.getPlanType(),
                user.getRole(),
                user.getStartup(),
                user.isMustChangePassword(),
                user.getSpecialite(),
                user.getDisponibilite()
        );
    }
}