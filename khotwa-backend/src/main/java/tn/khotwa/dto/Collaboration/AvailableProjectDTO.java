package tn.khotwa.DTO.collaboration;

import tn.khotwa.entity.projet.Projet;

public record AvailableProjectDTO(
        Long id,
        String name,
        String ownerName
) {
    public static AvailableProjectDTO fromEntity(Projet project) {
        return new AvailableProjectDTO(
                project.getId(),
                project.getNomStartup(),
                project.getEntrepreneur() != null ? project.getEntrepreneur().getFullName() : null
        );
    }
}

