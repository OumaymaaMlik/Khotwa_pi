package tn.khotwa.projection.user;

import tn.khotwa.enums.PlanType;
import tn.khotwa.enums.user.Role;

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
