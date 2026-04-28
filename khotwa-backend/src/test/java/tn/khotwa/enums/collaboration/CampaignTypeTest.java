package tn.khotwa.enums.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

class CampaignTypeTest {

    @Test
    void containsOnlySupportedCampaignTypes() {
        assertThat(CampaignType.values()).containsExactly(
                CampaignType.CROSS_PROMOTION,
                CampaignType.EVENT_PROMOTION
        );
    }

    @Test
    void rejectsRemovedLegacyCampaignTypes() {
        assertThatThrownBy(() -> CampaignType.valueOf("SOCIAL_MEDIA"))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> CampaignType.valueOf("CONTENT_EXCHANGE"))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> CampaignType.valueOf("CO_BRANDING"))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
