package tn.khotwa.biblio.projection.user;

import tn.khotwa.biblio.enums.PlanType;
import tn.khotwa.biblio.enums.Role;

/**
 * Projection Spring Data — exposée par le repository.
 * Jamais le mot de passe dans cette vue.
 */
public interface UserView {

    Long    getIdUser();
    String  getFirstName();
    String  getLastName();
    String  getEmailAddress();
    Role    getRole();
    PlanType getPlanType();
    PlanType getPendingPlan();
    String  getAvatar();
    String  getStartup();
    String  getPhoneNumber();
}
