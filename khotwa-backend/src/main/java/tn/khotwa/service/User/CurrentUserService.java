package tn.khotwa.service.User;

import tn.khotwa.entity.User.User;
import tn.khotwa.enums.User.Role;

public interface CurrentUserService {

    default User requireCurrentUser() {
        return getCurrentUser();
    }

    User getCurrentUser();

    Long getCurrentUserId();

    Role getCurrentUserRole();

    User getUserById(Long idUser);
}