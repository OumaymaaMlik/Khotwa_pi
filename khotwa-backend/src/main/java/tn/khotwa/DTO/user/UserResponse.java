package tn.khotwa.DTO.user;

import tn.khotwa.enums.PlanType;
import tn.khotwa.enums.User.Role;
import tn.khotwa.entity.User.User;

public record UserResponse(
        Long idUser,
        String avatar,
        String emailAddress,
        String firstName,
        String lastName,
        PlanType pendingPlan,
        String phoneNumber,
        PlanType planType,
        Role role,
        String startup,
        boolean mustChangePassword,
        String specialite,
        String disponibilite
) {
    public static UserResponse fromEntity(User user) {
        if (user == null) {
            return null;
        }
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
