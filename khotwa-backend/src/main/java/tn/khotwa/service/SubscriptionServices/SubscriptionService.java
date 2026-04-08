package tn.khotwa.service.SubscriptionServices;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.SubscriptionEntities.PlanOffer;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.entity.SubscriptionEntities.User;
import tn.khotwa.enums.SubscriptionEnums.PlanType;
import tn.khotwa.enums.SubscriptionEnums.SubscriptionStatus;
import tn.khotwa.repository.SubscriptionRepo.PlanOfferRepository;
import tn.khotwa.repository.SubscriptionRepo.SubscriptionRepository;
import tn.khotwa.repository.SubscriptionRepo.UserRepository;


import java.time.LocalDate;
import java.time.YearMonth;
import java.util.*;

@Service
@AllArgsConstructor
public class SubscriptionService implements ISubscriptionService {

    private final SubscriptionRepository subscriptionRepository;
    private final UserRepository userRepository;
    private final PlanOfferRepository planOfferRepository;

    @Override
    @Transactional
    public Subscription subscribeOrUpgrade(Long userId, Long planOfferId) {

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found: " + userId));

        PlanOffer targetOffer = planOfferRepository.findById(planOfferId).orElseThrow(() -> new RuntimeException("PlanOffer not found: " + planOfferId));

        PlanType targetPlan = targetOffer.getType();

        Subscription subscription = subscriptionRepository.findByUser_IdUser(userId).orElseThrow(() -> new RuntimeException("Subscription not found for user: " + userId));

        PlanType currentPlan = subscription.getPlan();

        if (currentPlan == targetPlan) {
            subscription.setPendingPlanOffer(null);
            syncUserFromSubscription(user, subscription);
            return subscriptionRepository.save(subscription);
        }

        int currentRank = getPlanRank(currentPlan);
        int targetRank = getPlanRank(targetPlan);

        if (targetRank > currentRank) { // upgrade immédiat
            changePlanSubscription(subscription, targetOffer);
            subscription.setPendingPlanOffer(null);
        } else {// downgrade à la fin de la période
            subscription.setPendingPlanOffer(targetOffer);
        }

        Subscription saved = subscriptionRepository.save(subscription);
        syncUserFromSubscription(user, saved);
        return saved;
    }

    @Override
    @Transactional
    public Subscription getActiveSubscriptionByUser(Long userId) {
        Optional<Subscription> existing = subscriptionRepository
                .findByUser_IdUserAndStatutIn(
                        userId,
                        List.of(SubscriptionStatus.ACTIVE, SubscriptionStatus.PENDING)
                );

        if (existing.isPresent()) {
            return existing.get();
        }

        Optional<Subscription> anyExisting = subscriptionRepository.findByUser_IdUser(userId);
        if (anyExisting.isPresent()) {
            Subscription sub = anyExisting.get();

            PlanOffer freeOffer = planOfferRepository.findFirstByType(PlanType.FREE)
                    .orElse(null);

            sub.setPlan(PlanType.FREE);
            sub.setPlanOffer(freeOffer);
            sub.setStatut(SubscriptionStatus.ACTIVE);
            sub.setDateDebut(LocalDate.now());
            sub.setDateFin(
                    freeOffer != null && freeOffer.getDuree() != null && freeOffer.getDuree() > 0
                            ? LocalDate.now().plusDays(freeOffer.getDuree())
                            : LocalDate.of(2099, 12, 31)
            );
            sub.setPendingPlanOffer(null);

            Subscription saved = subscriptionRepository.save(sub);
            syncUserFromSubscription(saved.getUser(), saved);
            return saved;
        }

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));

        PlanOffer freeOffer = planOfferRepository.findFirstByType(PlanType.FREE)
                .orElse(null);

        Subscription freeSub = new Subscription();
        freeSub.setUser(user);
        freeSub.setPlan(PlanType.FREE);
        freeSub.setPlanOffer(freeOffer);
        freeSub.setStatut(SubscriptionStatus.ACTIVE);
        freeSub.setDateDebut(LocalDate.now());
        freeSub.setDateFin(
                freeOffer != null && freeOffer.getDuree() != null && freeOffer.getDuree() > 0
                        ? LocalDate.now().plusDays(freeOffer.getDuree())
                        : LocalDate.of(2099, 12, 31)
        );
        freeSub.setAutoRenouvellement(false);
        freeSub.setPendingPlanOffer(null);
        freeSub.setPaiementRef(null);

        Subscription saved = subscriptionRepository.save(freeSub);
        syncUserFromSubscription(user, saved);
        return saved;
    }

    @Override
    @Transactional
    public Subscription UpdateSubscription(Long id, Subscription subscription) {
        Subscription existing = subscriptionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found with id: " + id));

        PlanOffer offer = (subscription.getPlanOffer() != null && subscription.getPlanOffer().getId() != null)
                ? planOfferRepository.findById(subscription.getPlanOffer().getId())
                .orElseThrow(() -> new RuntimeException("PlanOffer not found: " + subscription.getPlanOffer().getId()))
                : planOfferRepository.findFirstByType(subscription.getPlan())
                .orElseThrow(() -> new RuntimeException("PlanOffer not found for plan: " + subscription.getPlan()));

        existing.setPlan(offer.getType());
        existing.setPlanOffer(offer);
        existing.setStatut(subscription.getStatut());
        existing.setDateDebut(subscription.getDateDebut());
        existing.setDateFin(
                offer.getDuree() == null || offer.getDuree() <= 0 || offer.getType() == PlanType.FREE
                        ? LocalDate.of(2099, 12, 31)
                        : existing.getDateDebut().plusDays(offer.getDuree())
        );
        existing.setAutoRenouvellement(subscription.isAutoRenouvellement());

        if (subscription.getPaiementRef() != null) {
            existing.setPaiementRef(subscription.getPaiementRef());
        }

        Subscription saved = subscriptionRepository.save(existing);
        syncUserFromSubscription(saved.getUser(), saved);
        return saved;
    }

    @Override
    @Transactional
    public Subscription cancelPendingSubscription(Long subscriptionId) {
        Subscription subscription = subscriptionRepository.findById(subscriptionId)
                .orElseThrow(() -> new RuntimeException("Subscription not found: " + subscriptionId));

        subscription.setPendingPlanOffer(null);

        Subscription saved = subscriptionRepository.save(subscription);
        syncUserFromSubscription(saved.getUser(), saved);
        return saved;
    }

    @Override
    @Transactional
    public Subscription updateAutoRenew(Long subscriptionId, boolean value) {
        Subscription subscription = subscriptionRepository.findById(subscriptionId)
                .orElseThrow(() -> new RuntimeException("Subscription not found with id: " + subscriptionId));

        subscription.setAutoRenouvellement(value);

        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription adminPending(Long subscriptionId) {
        Subscription subscription = subscriptionRepository.findById(subscriptionId)
                .orElseThrow(() -> new RuntimeException("Subscription not found: " + subscriptionId));

        subscription.setStatut(SubscriptionStatus.PENDING);
        return subscriptionRepository.save(subscription);
    }

    @Override
    @Transactional
    public Subscription requestPlanChange(Long userId, PlanType targetPlan) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));

        Subscription subscription = getActiveSubscriptionByUser(userId);

        PlanOffer offer = planOfferRepository.findFirstByType(targetPlan)
                .orElseThrow(() -> new RuntimeException("PlanOffer not found for: " + targetPlan));

        PlanType currentPlan = subscription.getPlan();

        if (currentPlan == targetPlan) {
            subscription.setPendingPlanOffer(null);
        } else {
            int currentRank = getPlanRank(currentPlan);
            int targetRank = getPlanRank(targetPlan);

            if (targetRank > currentRank) {
                // upgrade immédiat
                changePlanSubscription(subscription, offer);
                subscription.setPendingPlanOffer(null);
            } else {
                // downgrade différé
                subscription.setPendingPlanOffer(offer);
            }
        }

        Subscription saved = subscriptionRepository.save(subscription);
        syncUserFromSubscription(user, saved);
        return saved;
    }

    @Override
    public Subscription getById(Long id) {
        return subscriptionRepository.findById(id).orElse(null);
    }

    @Override
    public List<Subscription> getAll() {
        return subscriptionRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        subscriptionRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void desactiverSubExpired() {
        List<Subscription> subs = subscriptionRepository.findByStatutAndDateFinBefore(
                SubscriptionStatus.ACTIVE,
                LocalDate.now().plusDays(1)
        );

        for (Subscription sub : subs) {
            User user = sub.getUser();

            if (sub.getPendingPlanOffer() != null) {
                changePlanSubscription(sub, sub.getPendingPlanOffer());
                sub.setPendingPlanOffer(null);
                subscriptionRepository.save(sub);
                syncUserFromSubscription(user, sub);

            } else if (sub.isAutoRenouvellement()) {
                PlanOffer offer = sub.getPlanOffer() != null
                        ? sub.getPlanOffer()
                        : planOfferRepository.findFirstByType(sub.getPlan()).orElse(null);

                if (offer != null) {
                    sub.setDateDebut(LocalDate.now());
                    sub.setDateFin(
                            offer.getDuree() == null || offer.getDuree() <= 0 || offer.getType() == PlanType.FREE
                                    ? LocalDate.of(2099, 12, 31)
                                    : LocalDate.now().plusDays(offer.getDuree())
                    );
                    sub.setStatut(SubscriptionStatus.ACTIVE);

                    subscriptionRepository.save(sub);
                    syncUserFromSubscription(user, sub);
                }

            } else {
                PlanOffer freeOffer = planOfferRepository.findFirstByType(PlanType.FREE)
                        .orElse(null);

                if (freeOffer != null) {
                    changePlanSubscription(sub, freeOffer);
                    sub.setPendingPlanOffer(null);
                    sub.setPaiementRef(null);
                    sub.setAutoRenouvellement(false);
                } else {
                    sub.setStatut(SubscriptionStatus.EXPIRED);
                }

                subscriptionRepository.save(sub);
                syncUserFromSubscription(user, sub);
            }
        }
    }

    @Override
    public void notifierExpiration() {

    }

    @Override
    public Subscription renewSubscription(Long id) {
        Subscription subscription = subscriptionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Subscription not found with id: " + id));

        PlanOffer offer = subscription.getPlanOffer() != null
                ? subscription.getPlanOffer()
                : planOfferRepository.findFirstByType(subscription.getPlan())
                .orElseThrow(() -> new RuntimeException("PlanOffer not found for: " + subscription.getPlan()));

        subscription.setStatut(SubscriptionStatus.ACTIVE);
        subscription.setDateDebut(LocalDate.now());
        subscription.setDateFin(offer.getDuree() == -1
                ? LocalDate.of(2099, 12, 31)
                : LocalDate.now().plusDays(offer.getDuree()));

        return subscriptionRepository.save(subscription);
    }

    public int getPlanRank(PlanType plan) {
        if (plan == null) return 0;

        return switch (plan) {
            case FREE -> 1;
            case PREMIUM -> 2;
            case INSTITUTIONAL -> 3;
        };
    }

    public void syncUserFromSubscription(User user, Subscription subscription) {
        user.setPlanType(subscription.getPlan());

        if (subscription.getPendingPlanOffer() != null) {
            user.setPendingPlan(subscription.getPendingPlanOffer().getType());
        } else {
            user.setPendingPlan(null);
        }

        userRepository.save(user);
    }

    public void changePlanSubscription(Subscription subscription, PlanOffer offer) {
        subscription.setPlan(offer.getType());
        subscription.setPlanOffer(offer);
        subscription.setStatut(SubscriptionStatus.ACTIVE);
        subscription.setDateDebut(LocalDate.now());

        if (offer.getDuree() == null || offer.getDuree() <= 0 || offer.getType() == PlanType.FREE) {
            subscription.setDateFin(LocalDate.of(2099, 12, 31));
        } else {
            subscription.setDateFin(LocalDate.now().plusDays(offer.getDuree()));
        }
    }

    @Override
    @Transactional
    public Subscription confirmPaymentByUser(Long userId, Long planOfferId, String paymentRef) {
        Subscription subscription = subscriptionRepository
                .findByUser_IdUser(userId)
                .orElseThrow(() -> new RuntimeException("Subscription not found for user: " + userId));

        PlanOffer offer = planOfferRepository
                .findById(planOfferId)
                .orElseThrow(() -> new RuntimeException("PlanOffer not found: " + planOfferId));

        subscription.setPlan(offer.getType());
        subscription.setPlanOffer(offer);
        subscription.setStatut(SubscriptionStatus.ACTIVE);
        subscription.setDateDebut(LocalDate.now());
        subscription.setDateFin(
                offer.getDuree() == null || offer.getDuree() <= 0 || offer.getType() == PlanType.FREE
                        ? LocalDate.of(2099, 12, 31)
                        : LocalDate.now().plusDays(offer.getDuree())
        );
        subscription.setPendingPlanOffer(null);
        subscription.setPaiementRef(paymentRef);

        Subscription saved = subscriptionRepository.save(subscription);

        User user = subscription.getUser();
        user.setPlanType(saved.getPlan());
        user.setPendingPlan(null);
        userRepository.save(user);

        return saved;
    }

    public List<Map<String, Object>> getAdminSubscriptions() {
        List<Subscription> subs = subscriptionRepository.findAll();

        List<Map<String, Object>> result = new ArrayList<>();

        for (Subscription sub : subs) {

            Map<String, Object> row = new HashMap<>();

            User user = sub.getUser();
            PlanOffer offer = sub.getPlanOffer();

            row.put("idSubscription", sub.getIdSubscription());
            row.put("nom", user != null ? user.getNom() : null);
            row.put("prenom", user != null ? user.getPrenom() : null);
            row.put("avatar", user != null ? user.getAvatar() : null);
            row.put("plan", sub.getPlan());
            row.put("planOfferLabel", offer != null ? offer.getLabel() : null);
            row.put("montant", offer != null ? offer.getPrix() : 0);
            row.put("paiementRef", sub.getPaiementRef());
            row.put("dateDebut", sub.getDateDebut());
            row.put("dateFin", sub.getDateFin());

            result.add(row);
        }

        return result;
    }
    @Override
    public List<Map<String, Object>> getTotalRevenueByUser() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();

        Map<Long, Map<String, Object>> grouped = new LinkedHashMap<>();

        for (Subscription sub : subscriptions) {
            if (sub.getPaiementRef() != null &&
                    sub.getPlanOffer() != null &&
                    sub.getPlanOffer().getPrix() != null &&
                    sub.getUser() != null) {

                Long userId = sub.getUser().getIdUser();
                Double amount = sub.getPlanOffer().getPrix();

                if (!grouped.containsKey(userId)) {
                    Map<String, Object> row = new HashMap<>();
                    row.put("idUser", userId);
                    row.put("nom", sub.getUser().getNom());
                    row.put("prenom", sub.getUser().getPrenom());
                    row.put("avatar", sub.getUser().getAvatar());
                    row.put("total", 0.0);
                    row.put("paymentsCount", 0);
                    grouped.put(userId, row);
                }

                Map<String, Object> existing = grouped.get(userId);
                existing.put("total", (Double) existing.get("total") + amount);
                existing.put("paymentsCount", (Integer) existing.get("paymentsCount") + 1);
            }
        }

        return new ArrayList<>(grouped.values());
    }
    @Override
    public List<Map<String, Object>> getRevenueByUser() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();
        List<Map<String, Object>> result = new ArrayList<>();

        for (Subscription sub : subscriptions) {
            if (sub.getPaiementRef() != null &&
                    sub.getPlanOffer() != null &&
                    sub.getPlanOffer().getPrix() != null &&
                    sub.getUser() != null) {

                Map<String, Object> row = new HashMap<>();
                row.put("idSubscription", sub.getIdSubscription());
                row.put("idUser", sub.getUser().getIdUser());
                row.put("nom", sub.getUser().getNom());
                row.put("prenom", sub.getUser().getPrenom());
                row.put("avatar", sub.getUser().getAvatar());
                row.put("plan", sub.getPlan());
                row.put("planOfferLabel", sub.getPlanOffer().getLabel());
                row.put("montant", sub.getPlanOffer().getPrix());
                row.put("paiementRef", sub.getPaiementRef());
                row.put("dateDebut", sub.getDateDebut());
                row.put("dateFin", sub.getDateFin());

                result.add(row);
            }
        }

        return result;
    }
    @Override
    public List<Map<String, Object>> getRevenueByMonth() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();

        Map<String, Double> grouped = new TreeMap<>();

        for (Subscription sub : subscriptions) {
            if (sub.getPaiementRef() != null &&
                    sub.getPlanOffer() != null &&
                    sub.getPlanOffer().getPrix() != null &&
                    sub.getDateDebut() != null) {

                String month = YearMonth.from(sub.getDateDebut()).toString(); // ex: 2026-04
                Double amount = sub.getPlanOffer().getPrix();

                grouped.put(month, grouped.getOrDefault(month, 0.0) + amount);
            }
        }

        List<Map<String, Object>> result = new ArrayList<>();

        for (Map.Entry<String, Double> entry : grouped.entrySet()) {
            Map<String, Object> row = new HashMap<>();
            row.put("month", entry.getKey());
            row.put("total", entry.getValue());
            result.add(row);
        }

        return result;
    }
    @Override
    public List<Map<String, Object>> getRevenueByDay() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();

        Map<LocalDate, Double> grouped = new TreeMap<>();

        for (Subscription sub : subscriptions) {
            if (sub.getPaiementRef() != null &&
                    sub.getPlanOffer() != null &&
                    sub.getPlanOffer().getPrix() != null &&
                    sub.getDateDebut() != null) {

                LocalDate day = sub.getDateDebut();
                Double amount = sub.getPlanOffer().getPrix();

                grouped.put(day, grouped.getOrDefault(day, 0.0) + amount);
            }
        }

        List<Map<String, Object>> result = new ArrayList<>();

        for (Map.Entry<LocalDate, Double> entry : grouped.entrySet()) {
            Map<String, Object> row = new HashMap<>();
            row.put("date", entry.getKey());
            row.put("total", entry.getValue());
            result.add(row);
        }

        return result;
    }
    @Override
    public Map<String, Object> getRevenueSummary() {
        List<Subscription> subscriptions = subscriptionRepository.findAll();

        double totalRevenue = 0.0;
        int totalPaidSubscriptions = 0;

        for (Subscription sub : subscriptions) {
            if (sub.getPaiementRef() != null &&
                    sub.getPlanOffer() != null &&
                    sub.getPlanOffer().getPrix() != null) {

                totalRevenue += sub.getPlanOffer().getPrix();
                totalPaidSubscriptions++;
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("totalRevenue", totalRevenue);
        result.put("totalPaidSubscriptions", totalPaidSubscriptions);

        return result;
    }
}