package tn.khotwa.DTO.projet;

import lombok.Data;

@Data
public class AiPitchRequestDto {
    private String fieldKey;
    private String fieldLabel;
    private String originalText;
}