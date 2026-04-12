package tn.khotwa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.Evenement;
import tn.khotwa.entity.User;
import tn.khotwa.enums.Role;
import tn.khotwa.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(long idUser, User user) {
        User existing = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        existing.setNom(user.getNom());
        existing.setPrenom(user.getPrenom());
        existing.setEmail(user.getEmail());
        existing.setRole(user.getRole());
        existing.setAvatar(user.getAvatar());
        existing.setStartup(user.getStartup());

        return userRepository.save(existing);
    }

    @Override
    public void deleteUser(long idUser) {
        userRepository.deleteById(idUser);
    }

    @Override
    public User findUserById(long idUser) {
        return userRepository.findById(idUser).orElse(null);
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Evenement> getCreatedEvents(long idUser) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getCreatedEvents();
    }

    @Override
    public List<Evenement> getParticipatedEvents(long idUser) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getEventsParticipated();
    }

    // Nouvel endpoint : récupérer tous les événements créés par l'admin
    public List<Evenement> getEventsCreatedByAdmin() {
        List<User> admins = userRepository.findAll()
                .stream()
                .filter(u -> u.getRole() == Role.ADMIN )
                .toList();

        List<Evenement> events = new ArrayList<>();
        for (User admin : admins) {
            events.addAll(admin.getCreatedEvents());
        }
        return events;
    }
}
