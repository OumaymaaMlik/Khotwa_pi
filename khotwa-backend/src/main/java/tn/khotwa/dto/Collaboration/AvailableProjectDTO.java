package tn.khotwa.dto.collaboration;

import tn.khotwa.entity.collaboration.Project;

public record AvailableProjectDTO(
        Long id,
        String name,
        String ownerName
) {
    public static AvailableProjectDTO fromEntity(Project project) {
        return new AvailableProjectDTO(
                project.getId(),
                project.getName(),
                project.getOwner().getFullName()
        );
    }
}

