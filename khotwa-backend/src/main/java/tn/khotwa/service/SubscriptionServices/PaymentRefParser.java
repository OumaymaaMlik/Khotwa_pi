package tn.khotwa.service.SubscriptionServices;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * Parse la référence de paiement encodée dans paiement_ref.
 * Format stocké :
 *   PAYPAL-ORDER:<orderId>|PAYER:<payerId>[|MONTANT:<montant>][|REMISE:<pct>%]
 */
@Component
public class PaymentRefParser {

    /**
     * Parse une ref et retourne une Map avec les clés :
     *   paypalOrderId, payerId, montant (nullable), discountPercent (nullable), hasDiscount
     */
    public Map<String, Object> parse(String ref) {
        Map<String, Object> result = new HashMap<>();

        if (ref == null || ref.isBlank()) {
            result.put("hasDiscount", false);
            return result;
        }

        for (String segment : ref.split("\\|")) {
            if (segment.startsWith("PAYPAL-ORDER:")) {
                result.put("paypalOrderId", segment.substring("PAYPAL-ORDER:".length()));

            } else if (segment.startsWith("PAYER:")) {
                result.put("payerId", segment.substring("PAYER:".length()));

            } else if (segment.startsWith("MONTANT:")) {
                String raw = segment.substring("MONTANT:".length());
                try { result.put("montant", Double.parseDouble(raw)); }
                catch (NumberFormatException ignored) { result.put("montant", raw); }

            } else if (segment.startsWith("REMISE:")) {
                // "20%" → 20
                String raw = segment.substring("REMISE:".length()).replace("%", "");
                try { result.put("discountPercent", Integer.parseInt(raw)); }
                catch (NumberFormatException ignored) { result.put("discountPercent", raw); }
            }
        }

        result.put("hasDiscount", result.containsKey("discountPercent"));
        result.put("rawRef", ref);
        return result;
    }
}