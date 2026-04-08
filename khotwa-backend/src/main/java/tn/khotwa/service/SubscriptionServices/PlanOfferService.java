package tn.khotwa.service.SubscriptionServices;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.SubscriptionEntities.PlanOffer;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.repository.SubscriptionRepo.PlanOfferRepository;
import tn.khotwa.repository.SubscriptionRepo.SubscriptionRepository;


import java.time.LocalDate;
import java.time.YearMonth;
import java.util.*;

@Service
@AllArgsConstructor
public class PlanOfferService implements IPlanOfferService {

    private final PlanOfferRepository planOfferRepository;
    private final SubscriptionRepository subscriptionRepository;

    @Override
    public List<PlanOffer> getAllPlans() {
        return planOfferRepository.findAll();
    }

    @Override
    public List<PlanOffer> getAllByType(PlanType type) {
        return planOfferRepository.findAllByType(type);
    }

    @Override
    public PlanOffer getById(Long id) {
        return planOfferRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("PlanOffer not found: " + id));
    }

    @Override
    public PlanOffer addPlan(PlanOffer planOffer) {
        return planOfferRepository.save(planOffer);
    }

    @Override
    public PlanOffer updatePlan(Long id, PlanOffer updated) {
        PlanOffer plan = getById(id);

        if (updated.getType() != null)
            plan.setType(updated.getType());

        if (updated.getPrix() != null && updated.getPrix() > 0)
            plan.setPrix(updated.getPrix());

        if (updated.getDuree() != null && updated.getDuree() > 0)
            plan.setDuree(updated.getDuree());

        if (updated.getLabel() != null && !updated.getLabel().isBlank())
            plan.setLabel(updated.getLabel());

        if (updated.getDescription() != null && !updated.getDescription().isBlank())
            plan.setDescription(updated.getDescription());

        if (updated.getAvantages() != null && !updated.getAvantages().isBlank())
            plan.setAvantages(updated.getAvantages());

        return planOfferRepository.save(plan);
    }

    @Override
    public void deletePlan(Long id) {
        planOfferRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("PlanOffer not found: " + id));
        planOfferRepository.deleteById(id);
    }

}