package tn.khotwa.dto.Collaboration;

import tn.khotwa.entity.Collaboration.Project;

public record ProjectSummaryDTO(
        Long id,
        String name
) {
    public static ProjectSummaryDTO fromEntity(Project project) {
        return new ProjectSummaryDTO(project.getId(), project.getName());
    }
}