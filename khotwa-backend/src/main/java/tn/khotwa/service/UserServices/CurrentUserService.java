package tn.khotwa.service.UserServices;

import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.enums.UserEnum.Role;

public interface CurrentUserService {

    User getCurrentUser();

    Long getCurrentUserId();

    Role getCurrentUserRole();

    User getUserById(Long idUser);
}