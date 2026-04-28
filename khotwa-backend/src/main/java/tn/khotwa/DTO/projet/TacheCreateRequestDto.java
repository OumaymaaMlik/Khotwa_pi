package tn.khotwa.DTO.projet;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.projectEnum.PrioriteTache;
import tn.khotwa.enums.projectEnum.TypeTache;


import java.time.LocalDate;

@Data
public class TacheCreateRequestDto {
    @NotBlank
    private String titre;
    private String description;
    @NotNull
    private TypeTache typeTache;
    @NotNull
    private PrioriteTache priorite;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String commentaireCoach;
}
