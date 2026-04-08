package tn.khotwa.service.SubscriptionServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.entity.SubscriptionEntities.User;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;
import tn.khotwa.repository.SubscriptionRepo.UserRepository;


import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService implements tn.khotwa.service.SubscriptionServices.IUserService {

    private final UserRepository userRepository;


    private final tn.khotwa.repository.SubscriptionRepo.SubscriptionRepository subscriptionRepository;



    @Override
    public User addUser(User user) {
        user.setPlanType(PlanType.FREE);
        user.setPendingPlan(null);

        User savedUser = userRepository.save(user);

        Subscription freeSubscription = new Subscription();
        freeSubscription.setUser(savedUser);
        freeSubscription.setPlan(PlanType.FREE);
        freeSubscription.setStatut(SubscriptionStatus.ACTIVE);
        freeSubscription.setDateDebut(LocalDate.now());
        freeSubscription.setDateFin(LocalDate.of(2099, 12, 31));
        freeSubscription.setAutoRenouvellement(false);
        freeSubscription.setPendingPlanOffer(null);
        freeSubscription.setPaiementRef(null);

        subscriptionRepository.save(freeSubscription);

        return savedUser;
    }


    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
    }


    public User updateUser(Long id, User updatedUser) {
        User existingUser = getUserById(id);

        existingUser.setNom(updatedUser.getNom());
        existingUser.setPrenom(updatedUser.getPrenom());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setRole(updatedUser.getRole());
        existingUser.setAvatar(updatedUser.getAvatar());
        existingUser.setStartup(updatedUser.getStartup());

        return userRepository.save(existingUser);
    }
}