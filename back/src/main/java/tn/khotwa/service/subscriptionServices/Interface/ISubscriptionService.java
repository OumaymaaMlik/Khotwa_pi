package tn.khotwa.service.subscriptionServices.Interface;

import tn.khotwa.entity.subscription.PlanOffer;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.PlanType;
import tn.khotwa.entity.subscription.Subscription;

import java.util.List;
import java.util.Map;

public interface ISubscriptionService {

    Subscription UpdateSubscription(Long id, Subscription subscription);

    Subscription getById(Long id);

    List<Subscription> getAll();

    void delete(Long id);

    Subscription getActiveSubscriptionByUser(Long userId);

    Subscription confirmPaymentByUser(Long userId, Long planOfferId, String paymentRef);

    void desactiverSubExpired();

    void notifierExpiration();

    Subscription subscribeOrUpgrade(Long userId, Long planOfferId);

    Subscription renewSubscription(Long id);

    int getPlanRank(PlanType plan);

    List<Map<String, Object>> getAdminSubscriptions();

    void syncUserFromSubscription(User user, Subscription subscription);

    void changePlanSubscription(Subscription subscription, PlanOffer offer);

    Subscription cancelPendingSubscription(Long subscriptionId);

    Subscription updateAutoRenew(Long subscriptionId, boolean autoRenew);

    Subscription adminPending(Long subscriptionId);

    Subscription requestPlanChange(Long userId, PlanType targetPlan);

    List<Map<String, Object>> getTotalRevenueByUser();

    List<Map<String, Object>> getRevenueByUser();

    List<Map<String, Object>> getRevenueByMonth();

    List<Map<String, Object>> getRevenueByDay();

    Map<String, Object> getRevenueSummary();

    Subscription createFreeSubscription(User user);

    Map<String, Object> getUpgradeSuggestion(Long userId, int premiumThreshold, int discountPercent);
}
