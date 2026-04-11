package tn.khotwa.biblio.service;

import org.springframework.stereotype.Service;
import tn.khotwa.biblio.enums.PlanType;
import tn.khotwa.biblio.enums.Role;
import tn.khotwa.biblio.exception.AccessDeniedException;

import java.util.ArrayList;
import java.util.List;

// FIX: remplacé AccessLevel (PUBLIC/INCUBES/PAYANT) par PlanType (FREE/PREMIUM/INSTITUTIONAL)
//       et UserRole par Role
@Service
public class AccessControlService {

    /**
     * Vérifie si le user a le droit d'accéder à une ressource selon son PlanType.
     * FREE       → ressources FREE uniquement
     * PREMIUM    → FREE + PREMIUM
     * INSTITUTIONAL → tout (FREE + PREMIUM + INSTITUTIONAL)
     * ADMIN/COACH → accès total sans restriction de plan
     */
    public void verifierAcces(Role role, PlanType userPlan, PlanType ressourcePlan) {
        if (role == Role.ADMIN || role == Role.COACH) return; // accès total

        if (role == null) {
            if (ressourcePlan != PlanType.FREE)
                throw new AccessDeniedException("Connexion requise pour accéder à cette ressource.");
            return;
        }

        // ENTREPRENEUR : vérifier son plan
        switch (ressourcePlan) {
            case FREE -> {} // toujours accessible
            case PREMIUM -> {
                if (userPlan == PlanType.FREE)
                    throw new AccessDeniedException("Abonnement PREMIUM requis pour cette ressource.");
            }
            case INSTITUTIONAL -> {
                if (userPlan != PlanType.INSTITUTIONAL)
                    throw new AccessDeniedException("Abonnement INSTITUTIONAL requis pour cette ressource.");
            }
        }
    }

    /**
     * Retourne la liste des PlanTypes accessibles pour un utilisateur donné.
     */
    public List<PlanType> getPlanTypesAccessibles(Role role, PlanType userPlan) {
        if (role == Role.ADMIN || role == Role.COACH)
            return List.of(PlanType.FREE, PlanType.PREMIUM, PlanType.INSTITUTIONAL);

        if (role == null) return List.of(PlanType.FREE);

        // ENTREPRENEUR
        var list = new ArrayList<PlanType>();
        list.add(PlanType.FREE);
        if (userPlan == PlanType.PREMIUM || userPlan == PlanType.INSTITUTIONAL)
            list.add(PlanType.PREMIUM);
        if (userPlan == PlanType.INSTITUTIONAL)
            list.add(PlanType.INSTITUTIONAL);
        return list;
    }
}
