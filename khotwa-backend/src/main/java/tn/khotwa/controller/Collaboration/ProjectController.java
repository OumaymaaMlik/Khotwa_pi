package tn.khotwa.controller.collaboration;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.collaboration.ProjectCollaborationContextDto;
import tn.khotwa.dto.collaboration.ProjectSummaryDTO;
import tn.khotwa.service.collaboration.CollaborationApiService;
import tn.khotwa.service.collaboration.ProjectOverviewService;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final CollaborationApiService collaborationApiService;
    private final ProjectOverviewService projectOverviewService;

    @GetMapping("/my")
    public List<ProjectSummaryDTO> getMyProjects() {
        return collaborationApiService.getMyProjects();
    }

    @GetMapping("/{projectId}/context")
    public ProjectCollaborationContextDto getProjectCollaborationContext(@PathVariable Long projectId) {
        return projectOverviewService.getProjectContext(projectId);
    }
}

