package tn.khotwa.DTO.talent;

import jakarta.validation.constraints.NotBlank;
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
    @NotBlank(message = "Le titre est obligatoire")
    private String titre;
    @NotBlank(message = "Le type de poste est obligatoire")
    private String typePoste;
    @NotBlank(message = "Les competences requises sont obligatoires")
    private String competencesRequises;
    private List<String> metiers;
    private String localisation;
    private String contexte;
    private String startupStage;
    private Integer experienceYears;
}
