package tn.khotwa.DTO.talent;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HiringAiAdviceRequestDTO {
    private String titre;
    private String typePoste;
    private String competencesRequises;
    private List<String> metiers;
    private String localisation;
    private String contexte;
}
