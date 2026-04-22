package tn.khotwa.dto.collaboration;

import tn.khotwa.entity.collaboration.Project;

public record ProjectSummaryDTO(
        Long id,
        String name
) {
    public static ProjectSummaryDTO fromEntity(Project project) {
        return new ProjectSummaryDTO(project.getId(), project.getName());
    }
}
