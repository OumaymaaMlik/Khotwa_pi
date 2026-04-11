package tn.khotwa.repository.SubscriptionRepo;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    List<Subscription> findByStatutAndDateFinBefore(
            SubscriptionStatus statut,
            LocalDate date);
    Optional<Subscription> findByUser_IdUser(Long userId);


    Optional<Subscription> findByUser_IdUserAndStatutIn(Long userId, List<SubscriptionStatus> statuts);
    List<Subscription> findByStatutAndDateFinBetween(
            SubscriptionStatus statut,
            LocalDate from,
            LocalDate to
    );
}