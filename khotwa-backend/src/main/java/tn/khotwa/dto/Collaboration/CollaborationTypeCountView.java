package tn.khotwa.DTO.collaboration;

import tn.khotwa.enums.collaboration.CollaborationType;

public interface CollaborationTypeCountView {

    CollaborationType getCollaborationType();

    Long getCollaborationCount();
}

