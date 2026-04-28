package tn.khotwa.DTO.projet;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BmcAnalysisResponseDto {
    private int    scoreGlobal;        // /10
    private String maturiteLabel;      // "Modèle naissant" / "en développement" / "mature"
    private String synthese;           // Paragraphe de synthèse
    private List<String> pointsForts;
    private List<String> incoherences;
    private List<String> questionsCritiques;
    private List<String> recommandations;
}