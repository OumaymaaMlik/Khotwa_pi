package tn.khotwa.controller.subscriptionController;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.subscription.Subscription;
import tn.khotwa.repository.subscriptionRepo.SubscriptionRepository;
import tn.khotwa.service.subscriptionServices.PaymentRefParser;
import tn.khotwa.service.subscriptionServices.SubscriptionService;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class PaymentController {

    private final SubscriptionService      subscriptionService;
    private final SubscriptionRepository   subscriptionRepository;
    private final PaymentRefParser         paymentRefParser;



    @PostMapping("/confirm")
    public ResponseEntity<Subscription> confirmPayment(@RequestBody Map<String, Object> body) {
        Long   userId      = Long.valueOf(body.get("userId").toString());
        Long   planOfferId = Long.valueOf(body.get("planOfferId").toString());
        String orderId     = body.get("paypalOrderId").toString();
        String payerId     = body.get("payerId").toString();

        StringBuilder paymentRef = new StringBuilder();
        paymentRef.append("PAYPAL-ORDER:").append(orderId);
        paymentRef.append("|PAYER:").append(payerId);

        if (body.get("montantPaye") != null) {
            paymentRef.append("|MONTANT:").append(body.get("montantPaye"));
        }
        if (body.get("discountPercent") != null) {
            paymentRef.append("|REMISE:").append(body.get("discountPercent")).append("%");
        }

        return ResponseEntity.ok(
                subscriptionService.confirmPaymentByUser(userId, planOfferId, paymentRef.toString())
        );
    }


    @GetMapping("/details/{subscriptionId}")
    public ResponseEntity<Map<String, Object>> getPaymentDetails(
            @PathVariable Long subscriptionId) {

        Subscription sub = subscriptionRepository.findById(subscriptionId)
                .orElseThrow(() -> new RuntimeException("subscription not found: " + subscriptionId));

        Map<String, Object> parsed = paymentRefParser.parse(sub.getPaiementRef());

        parsed.put("subscriptionId", sub.getIdSubscription());
        parsed.put("plan",           sub.getPlan());
        parsed.put("statut",         sub.getStatut());
        parsed.put("dateDebut",      sub.getDateDebut());
        parsed.put("dateFin",        sub.getDateFin());
        if (sub.getUser() != null) {
            parsed.put("userId",     sub.getUser().getIdUser());
        }
        if (sub.getPlanOffer() != null) {
            parsed.put("planOfferLabel", sub.getPlanOffer().getLabel());
            parsed.put("prixOriginal",   sub.getPlanOffer().getPrix());
        }

        return ResponseEntity.ok(parsed);
    }



    @GetMapping("/with-discount")
    public ResponseEntity<List<Map<String, Object>>> getAllWithDiscount() {

        List<Map<String, Object>> result = subscriptionRepository.findAll().stream()
                .filter(sub -> sub.getPaiementRef() != null
                        && sub.getPaiementRef().contains("|REMISE:"))
                .map(sub -> {
                    Map<String, Object> parsed = paymentRefParser.parse(sub.getPaiementRef());
                    parsed.put("subscriptionId", sub.getIdSubscription());
                    parsed.put("plan",           sub.getPlan());
                    parsed.put("statut",         sub.getStatut());
                    parsed.put("dateDebut",       sub.getDateDebut());
                    parsed.put("dateFin",         sub.getDateFin());
                    if (sub.getUser() != null) {
                        parsed.put("userId",     sub.getUser().getIdUser());
                        parsed.put("nom",        sub.getUser().getLastName());
                        parsed.put("prenom",     sub.getUser().getFirstName());
                    }
                    if (sub.getPlanOffer() != null) {
                        parsed.put("planOfferLabel", sub.getPlanOffer().getLabel());
                        parsed.put("prixOriginal",   sub.getPlanOffer().getPrix());
                    }
                    return parsed;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok(result);
    }
}