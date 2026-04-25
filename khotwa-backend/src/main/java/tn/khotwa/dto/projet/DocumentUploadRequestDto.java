package tn.khotwa.dto.projet;

import lombok.Data;

@Data
public class DocumentUploadRequestDto {
    private String nomFichier;
    private String nomOriginal;
    private String typeContenu;
    private String cheminStockage;
    private long tailleFichier;
}
