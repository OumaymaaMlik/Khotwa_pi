package tn.khotwa.DTO.collaboration;

import tn.khotwa.entity.projet.Projet;

public record ProjectSummaryDTO(
        Long id,
        String name
) {
    public static ProjectSummaryDTO fromEntity(Projet project) {
        return new ProjectSummaryDTO(project.getId(), project.getNomStartup());
    }
}
