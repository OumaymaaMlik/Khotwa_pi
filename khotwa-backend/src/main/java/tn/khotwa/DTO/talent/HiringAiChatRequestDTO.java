package tn.khotwa.DTO.talent;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HiringAiChatRequestDTO {
    @NotBlank(message = "La question est obligatoire")
    private String question;
    private String contexte;
    private Long annonceId;
}
