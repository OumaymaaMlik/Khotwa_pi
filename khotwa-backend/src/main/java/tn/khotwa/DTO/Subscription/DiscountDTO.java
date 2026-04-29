package tn.khotwa.DTO.Subscription;

import lombok.Builder;
import lombok.Data;
import tn.khotwa.entity.Subscription.Discount;

import java.time.LocalDateTime;

@Data
@Builder
public class DiscountDTO {
    private Long id;
    private Long userId;
    private String userFullName;
    private String userEmail;
    private Long planOfferId;
    private String planOfferLabel;
    private Double planOfferPrix;
    private String planOfferType;
    private Integer discountPercent;
    private Double discountedPrice;
    private LocalDateTime validFrom;
    private LocalDateTime validUntil;
    private String status;
    private LocalDateTime usedAt;
    private String notes;
    private LocalDateTime createdAt;

    public static DiscountDTO from(Discount d) {
        double original = d.getPlanOffer() != null && d.getPlanOffer().getPrix() != null
                ? d.getPlanOffer().getPrix() : 0.0;
        double discounted = Math.round(original * (1.0 - d.getDiscountPercent() / 100.0) * 100.0) / 100.0;

        return DiscountDTO.builder()
                .id(d.getId())
                .userId(d.getUser() != null ? d.getUser().getIdUser() : null)
                .userFullName(d.getUser() != null
                        ? d.getUser().getFirstName() + " " + d.getUser().getLastName()
                        : null)
                .userEmail(d.getUser() != null ? d.getUser().getEmailAddress() : null)
                .planOfferId(d.getPlanOffer() != null ? d.getPlanOffer().getId() : null)
                .planOfferLabel(d.getPlanOffer() != null ? d.getPlanOffer().getLabel() : null)
                .planOfferPrix(original)
                .planOfferType(d.getPlanOffer() != null ? d.getPlanOffer().getType().name() : null)
                .discountPercent(d.getDiscountPercent())
                .discountedPrice(discounted)
                .validFrom(d.getValidFrom())
                .validUntil(d.getValidUntil())
                .status(d.getStatus())
                .usedAt(d.getUsedAt())
                .notes(d.getNotes())
                .createdAt(d.getCreatedAt())
                .build();
    }
}