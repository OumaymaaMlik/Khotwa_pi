package tn.khotwa.service.SubscriptionServices;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.Subscription.CreateDiscountRequest;
import tn.khotwa.dto.Subscription.DiscountDTO;
import tn.khotwa.entity.SubscriptionEntities.Discount;
import tn.khotwa.entity.Subscription.PlanOffer;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.repository.SubscriptionRepo.DiscountRepository;
import tn.khotwa.repository.SubscriptionRepo.PlanOfferRepository;
import tn.khotwa.repository.UserRepo.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DiscountService {

    private final DiscountRepository discountRepository;
    private final PlanOfferRepository planOfferRepository;
    private final UserRepository userRepository;

    /** Admin : créer une remise */
    @Transactional
    public DiscountDTO createDiscount(CreateDiscountRequest req) {
        PlanOffer planOffer = planOfferRepository.findById(req.getPlanOfferId())
                .orElseThrow(() -> new RuntimeException("PlanOffer not found: " + req.getPlanOfferId()));

        User user = null;
        if (req.getUserId() != null) {
            user = userRepository.findById(req.getUserId())
                    .orElseThrow(() -> new RuntimeException("User not found: " + req.getUserId()));
        }

        if (req.getDiscountPercent() == null || req.getDiscountPercent() <= 0 || req.getDiscountPercent() >= 100) {
            throw new IllegalArgumentException("Discount percent must be between 1 and 99");
        }
        if (req.getValidFrom() == null || req.getValidUntil() == null) {
            throw new IllegalArgumentException("validFrom and validUntil are required");
        }
        if (req.getValidUntil().isBefore(req.getValidFrom())) {
            throw new IllegalArgumentException("validUntil must be after validFrom");
        }

        Discount discount = Discount.builder()
                .user(user)
                .planOffer(planOffer)
                .discountPercent(req.getDiscountPercent())
                .validFrom(req.getValidFrom())
                .validUntil(req.getValidUntil())
                .notes(req.getNotes())
                .status("ACTIVE")
                .build();

        return DiscountDTO.from(discountRepository.save(discount));
    }

    /** Admin : liste toutes les remises */
    public List<DiscountDTO> getAllDiscounts() {
        return discountRepository.findAllByOrderByCreatedAtDesc()
                .stream().map(DiscountDTO::from).collect(Collectors.toList());
    }

    /** Admin : supprimer une remise */
    @Transactional
    public void deleteDiscount(Long id) {
        Discount discount = discountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Discount not found: " + id));
        discountRepository.delete(discount);
    }

    /** Admin : désactiver une remise */
    @Transactional
    public DiscountDTO deactivateDiscount(Long id) {
        Discount discount = discountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Discount not found: " + id));
        discount.setStatus("EXPIRED");
        return DiscountDTO.from(discountRepository.save(discount));
    }

    /** Entrepreneur : récupère toutes les remises actives visibles (plans supérieurs au sien) */
    public List<DiscountDTO> getActiveDiscountsForUser(Long userId) {
        LocalDateTime now = LocalDateTime.now();
        return discountRepository.findActiveDiscountsForUser(userId, now)
                .stream().map(DiscountDTO::from).collect(Collectors.toList());
    }

    /** Récupère la meilleure remise active pour un user sur un plan spécifique */
    public Optional<DiscountDTO> getBestDiscountForUserAndPlan(Long userId, Long planOfferId) {
        LocalDateTime now = LocalDateTime.now();
        return discountRepository.findBestDiscountForUserAndPlan(userId, planOfferId, now)
                .map(DiscountDTO::from);
    }

    /** Marque une remise comme utilisée */
    @Transactional
    public void markDiscountAsUsed(Long discountId) {
        discountRepository.findById(discountId).ifPresent(d -> {
            d.setStatus("USED");
            d.setUsedAt(LocalDateTime.now());
            discountRepository.save(d);
        });
    }

    /** Scheduler : expire les remises dépassées (toutes les heures) */
    @Scheduled(fixedRate = 3_600_000)
    @Transactional
    public void expireOldDiscounts() {
        List<Discount> expired = discountRepository.findExpiredActive(LocalDateTime.now());
        for (Discount d : expired) {
            d.setStatus("EXPIRED");
        }
        if (!expired.isEmpty()) {
            discountRepository.saveAll(expired);
        }
    }
}