package tn.khotwa.service.SubscriptionServices;


import tn.khotwa.entity.SubscriptionEntities.User;

import java.util.List;

public interface IUserService {
    User addUser(User user);

    User getUserById(Long id);

    List<User> getAllUsers();


    void deleteUser(Long id);

    User updateUser(Long id ,User user);

    User getUserByEmail(String email);
}
