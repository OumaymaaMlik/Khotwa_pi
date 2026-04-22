package tn.khotwa.dto.Collaboration;

import tn.khotwa.enums.Collaboration.CollaborationType;

public interface CollaborationTypeCountView {

    CollaborationType getCollaborationType();

    Long getCollaborationCount();
}
