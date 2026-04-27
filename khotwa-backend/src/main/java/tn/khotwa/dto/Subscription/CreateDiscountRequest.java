package tn.khotwa.dto.Subscription;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CreateDiscountRequest {
    /** Null = global, sinon id du user cible */
    private Long userId;
    private Long planOfferId;
    private Integer discountPercent;
    private LocalDateTime validFrom;
    private LocalDateTime validUntil;
    private String notes;
}