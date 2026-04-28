package tn.khotwa.dto.projet;

import lombok.Data;

@Data
public class BmcAnalysisRequestDto {
    private String titreSartup;
    private String secteur;
    private String stade;
    // Les 9 blocs BMC
    private String propositionValeur;
    private String segmentsClientele;
    private String sourcesRevenus;
    private String canaux;
    private String relationsClients;
    private String ressourcesCles;
    private String activitesCles;
    private String structureCouts;
    private String partenaires;
}