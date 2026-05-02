package tn.khotwa.service.collaboration;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.collaboration.WeeklyCollaborationReportDTO;
import tn.khotwa.dto.collaboration.ProjectSummaryDTO;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.CollaborationRequest;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.repository.projet.ProjetRepository;
import tn.khotwa.service.user.CurrentUserService;

@Service
@RequiredArgsConstructor
public class CollaborationApiService {

    private final CollaborationService collaborationService;
    private final WeeklyCollaborationReportService weeklyCollaborationReportService;
    private final ProjetRepository projetRepository;
    private final CurrentUserService currentUserService;

    public Collaboration createCollaboration(Long projectId, CollaborationType type) {
        return collaborationService.createCollaboration(projectId, type);
    }

    public List<Collaboration> getCollaborations() {
        return collaborationService.getCollaborations();
    }

    public Collaboration getCollaboration(Long collaborationId) {
        return collaborationService.getCollaboration(collaborationId);
    }

    public List<Collaboration> getCollaborationsByProjectId(Long projectId) {
        return collaborationService.getCollaborationsByProjectId(projectId);
    }

    public List<ProjectSummaryDTO> getMyProjects() {
        Long userId = currentUserService.getCurrentUserId();
        return projetRepository.findByEntrepreneurId(userId).stream()
            .map(ProjectSummaryDTO::fromEntity)
            .collect(Collectors.toList());
    }

    public Collaboration updateCollaboration(Long collaborationId, CollaborationStatus status) {
        return collaborationService.updateCollaboration(collaborationId, status);
    }

    public void removeMember(Long collaborationId, Long memberId) {
        collaborationService.removeMember(collaborationId, memberId);
    }

    public void leaveCollaboration(Long collaborationId) {
        collaborationService.leaveCollaboration(collaborationId);
    }

    public CollaborationRequest createCollaborationRequest(Long targetUserId, Long targetCollaborationId) {
        return collaborationService.createCollaborationRequest(targetUserId, targetCollaborationId);
    }

    public List<CollaborationRequest> getSentCollaborationRequests() {
        return collaborationService.getSentCollaborationRequests();
    }

    public List<CollaborationRequest> getReceivedCollaborationRequests() {
        return collaborationService.getReceivedCollaborationRequests();
    }

    public List<CollaborationRequest> getCollaborationScopedRequests(Long collaborationId) {
        return collaborationService.getCollaborationScopedRequests(collaborationId);
    }

    public List<CollaborationRequest> getProjectCollaborationRequests(Long projectId) {
        return collaborationService.getProjectCollaborationRequests(projectId);
    }

    public CollaborationRequest acceptCollaborationRequest(Long requestId) {
        return collaborationService.acceptCollaborationRequest(requestId);
    }

    public CollaborationRequest rejectCollaborationRequest(Long requestId) {
        return collaborationService.rejectCollaborationRequest(requestId);
    }

    public WeeklyCollaborationReportDTO generateWeeklyCollaborationReport() {
        return weeklyCollaborationReportService.generateWeeklyReport();
    }

    public WeeklyCollaborationReportDTO getLatestWeeklyCollaborationReport() {
        return weeklyCollaborationReportService.getLatestWeeklyReport();
    }
}

