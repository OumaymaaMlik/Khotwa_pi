package tn.khotwa.service;

import tn.khotwa.entity.Evenement;
import tn.khotwa.entity.User;

import java.util.List;

public interface IUserService {
    User addUser(User user);
    User updateUser(long idUser, User user);
    List<User> findAllUsers();
    User findUserById(long  idUser);
    void deleteUser(long  idUser);
    List<Evenement> getCreatedEvents(long idUser);
    List<Evenement> getParticipatedEvents(long  idUser);
}
