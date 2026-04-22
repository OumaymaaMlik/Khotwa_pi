package tn.khotwa.dto.collaboration;

import tn.khotwa.enums.collaboration.CollaborationType;

public interface CollaborationTypeCountView {

    CollaborationType getCollaborationType();

    Long getCollaborationCount();
}

