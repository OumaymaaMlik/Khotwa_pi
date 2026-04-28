package tn.khotwa.controller.SubscriptionController;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.DTO.Subscription.CreateDiscountRequest;
import tn.khotwa.DTO.Subscription.DiscountDTO;
import tn.khotwa.service.SubscriptionServices.DiscountService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/discounts")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class DiscountController {

    private final DiscountService discountService;

    // ── Admin endpoints ────────────────────────────────────────────────────

    /** Créer une remise (admin) */
    @PostMapping
    public ResponseEntity<DiscountDTO> createDiscount(@RequestBody CreateDiscountRequest req) {
        return ResponseEntity.ok(discountService.createDiscount(req));
    }

    /** Liste toutes les remises (admin) */
    @GetMapping
    public ResponseEntity<List<DiscountDTO>> getAllDiscounts() {
        return ResponseEntity.ok(discountService.getAllDiscounts());
    }

    /** Désactiver une remise (admin) */
    @PutMapping("/{id}/deactivate")
    public ResponseEntity<DiscountDTO> deactivate(@PathVariable Long id) {
        return ResponseEntity.ok(discountService.deactivateDiscount(id));
    }

    /** Supprimer une remise (admin) */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDiscount(@PathVariable Long id) {
        discountService.deleteDiscount(id);
        return ResponseEntity.noContent().build();
    }

    // ── Entrepreneur endpoints ─────────────────────────────────────────────

    /** Récupère toutes les remises actives visibles pour un entrepreneur */
    @GetMapping("/user/{userId}/active")
    public ResponseEntity<List<DiscountDTO>> getActiveForUser(@PathVariable Long userId) {
        return ResponseEntity.ok(discountService.getActiveDiscountsForUser(userId));
    }

    /** Meilleure remise pour un user sur un plan spécifique */
    @GetMapping("/user/{userId}/plan/{planOfferId}/best")
    public ResponseEntity<DiscountDTO> getBestDiscount(
            @PathVariable Long userId,
            @PathVariable Long planOfferId) {
        Optional<DiscountDTO> best = discountService.getBestDiscountForUserAndPlan(userId, planOfferId);
        return best.map(ResponseEntity::ok).orElse(ResponseEntity.noContent().build());
    }

    /** Marquer une remise comme utilisée */
    @PutMapping("/{id}/use")
    public ResponseEntity<Void> markAsUsed(@PathVariable Long id) {
        discountService.markDiscountAsUsed(id);
        return ResponseEntity.ok().build();
    }
}