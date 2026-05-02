package tn.khotwa.repository.subscriptionRepo;



import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.subscription.PlanOffer;
import tn.khotwa.enums.PlanType;

import java.util.List;
import java.util.Optional;

public interface PlanOfferRepository extends JpaRepository<PlanOffer, Long> {

    List<PlanOffer> findAllByType(PlanType type);
    Optional<PlanOffer> findFirstByType(PlanType type);
}
