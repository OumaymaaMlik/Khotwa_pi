package tn.khotwa.dto.ressources;



import lombok.Data;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.ProgressStatus;
import tn.khotwa.projection.ressources.ProgressionView;

import java.util.List;

@Data
public class EntrepreneurProgressionDTO {
    private Long id;
    private String nomComplet;
    private String email;
    private int total;
    private long enCours;
    private long completes;
    private int tauxCompletion;
    private List<ProgressionView> progressions;

    public EntrepreneurProgressionDTO(User u, List<ProgressionView> progressions) {
        this.id = u.getIdUser();
        this.nomComplet = u.getFirstName() + " " + u.getLastName();
        this.email = u.getEmailAddress();
        this.progressions = progressions;
        this.total = progressions.size();
        this.completes = progressions.stream().filter(p -> p.getStatut() == ProgressStatus.COMPLETED).count();
        this.enCours = progressions.stream().filter(p -> p.getStatut() == ProgressStatus.IN_PROGRESS).count();
        this.tauxCompletion = this.total == 0 ? 0 : (int) Math.round((double) completes / this.total * 100);
    }
}