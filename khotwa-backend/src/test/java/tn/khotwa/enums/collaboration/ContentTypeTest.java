package tn.khotwa.enums.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import org.junit.jupiter.api.Test;

class ContentTypeTest {

    @Test
    void containsOnlySupportedSocialContentTypes() {
        assertThat(ContentType.values()).containsExactly(
                ContentType.POST,
                ContentType.REEL,
                ContentType.VIDEO
        );
    }

    @Test
    void rejectsRemovedLegacyContentTypes() {
        assertThatThrownBy(() -> ContentType.valueOf("STORY"))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> ContentType.valueOf("BLOG"))
                .isInstanceOf(IllegalArgumentException.class);
        assertThatThrownBy(() -> ContentType.valueOf("NEWSLETTER"))
                .isInstanceOf(IllegalArgumentException.class);
    }
}
