package tn.khotwa.dto.projet;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ProlongationRequestDto {
    @NotNull
    private LocalDate nouvelleDateFin;

    @NotBlank
    private String justificationEntrepreneur;
}
