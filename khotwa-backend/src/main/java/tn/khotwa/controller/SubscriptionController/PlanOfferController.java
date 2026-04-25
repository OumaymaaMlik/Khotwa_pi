package tn.khotwa.controller.SubscriptionController;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.Subscription.PlanOffer;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.service.SubscriptionServices.PlanOfferService;
import tn.khotwa.service.SubscriptionServices.SubscriptionService;


import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/plans")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class PlanOfferController {

    private final PlanOfferService planOfferService;
    private final SubscriptionService subscriptionService;


    @GetMapping
    public ResponseEntity<List<PlanOffer>> getAllPlans() {
        return ResponseEntity.ok(planOfferService.getAllPlans());
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<PlanOffer>> getAllByType(@PathVariable PlanType type) {
        return ResponseEntity.ok(planOfferService.getAllByType(type));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlanOffer> getById(@PathVariable Long id) {
        return ResponseEntity.ok(planOfferService.getById(id));
    }


    @PostMapping("/add")
    public ResponseEntity<PlanOffer> addPlan(@RequestBody PlanOffer planOffer) {
        return ResponseEntity.ok(planOfferService.addPlan(planOffer));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlanOffer> updatePlan(
            @PathVariable Long id,
            @RequestBody PlanOffer planOffer) {
        return ResponseEntity.ok(planOfferService.updatePlan(id, planOffer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlan(@PathVariable Long id) {
        planOfferService.deletePlan(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/admin/details")
    public ResponseEntity<List<Map<String, Object>>> getAdminDetails() {
        return ResponseEntity.ok(subscriptionService.getAdminSubscriptions());
    }

}