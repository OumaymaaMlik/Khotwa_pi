package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.PrioriteTache;
import tn.khotwa.enums.TypeTache;

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
