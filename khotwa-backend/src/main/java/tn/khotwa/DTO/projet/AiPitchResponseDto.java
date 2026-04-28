package tn.khotwa.DTO.projet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AiPitchResponseDto {
    private String improvedText;
    private String fieldKey;
    private String originalText;
}