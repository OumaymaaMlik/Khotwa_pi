package tn.khotwa.controller.SubscriptionController;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.SubscriptionEntities.Subscription;
import tn.khotwa.service.SubscriptionServices.SubscriptionService;

import java.util.Map;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class PaymentController {

    private final SubscriptionService subscriptionService;


    @PostMapping("/confirm")
    public ResponseEntity<Subscription> confirmPayment(@RequestBody Map<String, Object> body) {
        Long userId      = Long.valueOf(body.get("userId").toString());
        Long planOfferId = Long.valueOf(body.get("planOfferId").toString());
        String orderId   = body.get("paypalOrderId").toString();
        String payerId   = body.get("payerId").toString();

        String paymentRef = "PAYPAL-ORDER:" + orderId + "|PAYER:" + payerId;

        return ResponseEntity.ok(
                subscriptionService.confirmPaymentByUser(userId, planOfferId, paymentRef)
        );
    }

}