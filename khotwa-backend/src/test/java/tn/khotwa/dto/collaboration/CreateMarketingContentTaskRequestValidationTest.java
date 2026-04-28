package tn.khotwa.dto.collaboration;

import static org.assertj.core.api.Assertions.assertThat;

import jakarta.validation.Validation;
import jakarta.validation.Validator;
import java.util.Set;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import tn.khotwa.enums.collaboration.ContentType;
import tn.khotwa.enums.collaboration.Platform;

class CreateMarketingContentTaskRequestValidationTest {

    private Validator validator;

    @BeforeEach
    void setUp() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Test
    void rejectsMissingContentType() {
        CreateMarketingContentTaskRequest request = new CreateMarketingContentTaskRequest(
                1L,
                2L,
                "Instagram launch asset",
                "Short reel for cross-promotion",
                null,
                Platform.INSTAGRAM,
                null
        );

        Set<String> violatedFields = validator.validate(request)
                .stream()
                .map(violation -> violation.getPropertyPath().toString())
                .collect(java.util.stream.Collectors.toSet());

        assertThat(violatedFields).contains("contentType");
    }

    @Test
    void acceptsEachSupportedContentType() {
        for (ContentType contentType : ContentType.values()) {
            CreateMarketingContentTaskRequest request = new CreateMarketingContentTaskRequest(
                    1L,
                    2L,
                    "Instagram launch asset",
                    "Short-form campaign content",
                    contentType,
                    Platform.INSTAGRAM,
                    null
            );

            Set<String> violatedFields = validator.validate(request)
                    .stream()
                    .map(violation -> violation.getPropertyPath().toString())
                    .collect(java.util.stream.Collectors.toSet());

            assertThat(violatedFields).doesNotContain("contentType");
        }
    }
}
