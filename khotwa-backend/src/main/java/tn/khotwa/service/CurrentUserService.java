package tn.khotwa.service;

import tn.khotwa.entity.User;
import tn.khotwa.enums.Role;

public interface CurrentUserService {

    User getCurrentUser();

    Long getCurrentUserId();

    Role getCurrentUserRole();

    User getUserById(Long idUser);
}