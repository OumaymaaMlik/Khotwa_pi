package tn.khotwa.dto.Collaboration;

import tn.khotwa.entity.Collaboration.Project;

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
