package tn.khotwa.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import tn.khotwa.enums.PrioriteTache;

import java.time.LocalDate;

@Data
public class SousTacheCreateRequestDto {
    @NotBlank
    private String titre;
    private String description;
    @NotNull
    private PrioriteTache priorite;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String commentaireCoach;
}
