package tn.khotwa.service.SubscriptionServices.Interface;


import tn.khotwa.entity.Subscription.PlanOffer;
import tn.khotwa.enums.SubscriptionEnums.PlanType;

import java.util.List;

public interface IPlanOfferService {
    List<PlanOffer> getAllPlans();

    List<PlanOffer> getAllByType(PlanType type);

    PlanOffer getById(Long id);

    PlanOffer addPlan(PlanOffer planOffer);

    PlanOffer updatePlan(Long id, PlanOffer updated);

    void deletePlan(Long id);

}
