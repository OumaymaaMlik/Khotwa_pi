package tn.khotwa.controller.Collaboration;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.khotwa.dto.Collaboration.ProjectCollaborationContextDto;
import tn.khotwa.dto.Collaboration.ProjectSummaryDTO;
import tn.khotwa.service.Collaboration.CollaborationApiService;
import tn.khotwa.service.Collaboration.ProjectOverviewService;

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
