package tn.khotwa.controller.SubscriptionController;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.Subscription.Subscription;
import tn.khotwa.service.SubscriptionServices.SubscriptionService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/subscriptions")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @PostMapping("/select-plan")
    public ResponseEntity<Subscription> selectPlan(
            @RequestParam Long userId,
            @RequestParam Long planOfferId) {
        return ResponseEntity.ok(
                subscriptionService.subscribeOrUpgrade(userId, planOfferId)
        );
    }
    @PostMapping("/request-plan-change")
    public ResponseEntity<Subscription> requestPlanChange(@RequestBody Subscription subscription) {
        return ResponseEntity.ok(
                subscriptionService.requestPlanChange(subscription.getIdUser(), subscription.getPlan())
        );
    }
    @PutMapping("/{id}/admin-pending")
    public ResponseEntity<Subscription> markPending(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.adminPending(id));
    }

    @PutMapping("/{id}/auto-renew")
    public ResponseEntity<Subscription> updateAutoRenew(
            @PathVariable Long id,
            @RequestParam boolean value) {
        return ResponseEntity.ok(subscriptionService.updateAutoRenew(id, value));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subscription> update(
            @PathVariable Long id,
            @RequestBody Subscription subscription) {
        return ResponseEntity.ok(subscriptionService.UpdateSubscription(id, subscription));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subscription> getById(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.getById(id));
    }

    @GetMapping
    public ResponseEntity<List<Subscription>> getAll() {
        return ResponseEntity.ok(subscriptionService.getAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        subscriptionService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}/active")
    public ResponseEntity<Subscription> getActiveSubscriptionByUser(@PathVariable Long userId) {
        Subscription subscription = subscriptionService.getActiveSubscriptionByUser(userId);
        return ResponseEntity.ok(subscription);
    }

    @PutMapping("/expired/deactivate")
    public ResponseEntity<String> deactivateExpiredSubscriptions() {
        subscriptionService.desactiverSubExpired();
        return ResponseEntity.ok("Expired subscriptions deactivated successfully.");
    }

    @PutMapping("/notify-expiring")
    public ResponseEntity<String> notifyExpiringSubscriptions() {
        subscriptionService.notifierExpiration();
        return ResponseEntity.ok("Expiration notifications sent successfully.");
    }

    @PutMapping("/{id}/cancel-pending")
    public ResponseEntity<Subscription> cancelPending(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.cancelPendingSubscription(id));
    }

    @PutMapping("/{id}/renew")
    public ResponseEntity<Subscription> renewSubscription(@PathVariable Long id) {
        return ResponseEntity.ok(subscriptionService.renewSubscription(id));
    }

    @GetMapping("/admin/revenue/summary")
    public ResponseEntity<Map<String, Object>> getRevenueSummary() {
        return ResponseEntity.ok(subscriptionService.getRevenueSummary());
    }

    @GetMapping("/admin/revenue/day")
    public ResponseEntity<List<Map<String, Object>>> getRevenueByDay() {
        return ResponseEntity.ok(subscriptionService.getRevenueByDay());
    }

    @GetMapping("/admin/revenue/month")
    public ResponseEntity<List<Map<String, Object>>> getRevenueByMonth() {
        return ResponseEntity.ok(subscriptionService.getRevenueByMonth());
    }

    @GetMapping("/admin/revenue/user")
    public ResponseEntity<List<Map<String, Object>>> getRevenueByUser() {
        return ResponseEntity.ok(subscriptionService.getRevenueByUser());
    }

    @GetMapping("/admin/revenue/user-total")
    public ResponseEntity<List<Map<String, Object>>> getTotalRevenueByUser() {
        return ResponseEntity.ok(subscriptionService.getTotalRevenueByUser());
    }



    @GetMapping("/user/{userId}/expiration-alert")
    public ResponseEntity<Map<String, Object>> getExpirationAlert(@PathVariable Long userId) {
        Subscription sub = subscriptionService.getActiveSubscriptionByUser(userId);

        Map<String, Object> result = new HashMap<>();

        if (sub == null || sub.getDateFin() == null) {
            result.put("hasAlert", false);
            return ResponseEntity.ok(result);
        }

        if (sub.getDateFin().getYear() >= 2099) {
            result.put("hasAlert", false);
            return ResponseEntity.ok(result);
        }

        long daysLeft = java.time.temporal.ChronoUnit.DAYS.between(
                java.time.LocalDate.now(), sub.getDateFin()
        );

        boolean hasAlert = daysLeft >= 0 && daysLeft <= 3;

        result.put("hasAlert", hasAlert);
        result.put("daysLeft", daysLeft);
        result.put("dateFin", sub.getDateFin().toString());
        result.put("planLabel", sub.getPlanOffer() != null
                ? sub.getPlanOffer().getLabel()
                : sub.getPlan().name());

        return ResponseEntity.ok(result);
    }


    @GetMapping("/user/{userId}/upgrade-suggestion")
    public ResponseEntity<Map<String, Object>> getUpgradeSuggestion(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "1")  int premiumThreshold,
            @RequestParam(defaultValue = "20") int discountPercent) {

        return ResponseEntity.ok(
                subscriptionService.getUpgradeSuggestion(userId, premiumThreshold, discountPercent)
        );
    }

}