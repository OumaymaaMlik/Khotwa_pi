package tn.khotwa.service.user;

import tn.khotwa.entity.user.User;
import tn.khotwa.enums.user.Role;

public interface CurrentUserService {
    default User requireCurrentUser() {
        return getCurrentUser();
    }

    User getCurrentUser();

    Long getCurrentUserId();

    Role getCurrentUserRole();

    User getUserById(Long idUser);
}