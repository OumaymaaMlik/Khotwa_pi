package tn.khotwa.service.subscriptionServices.Interface;
import tn.khotwa.entity.subscription.PlanOffer;
import tn.khotwa.enums.PlanType;

import java.util.List;

public interface IPlanOfferService {
    List<PlanOffer> getAllPlans();

    List<PlanOffer> getAllByType(PlanType type);

    PlanOffer getById(Long id);

    PlanOffer addPlan(PlanOffer planOffer);

    PlanOffer updatePlan(Long id, PlanOffer updated);

    void deletePlan(Long id);

}
