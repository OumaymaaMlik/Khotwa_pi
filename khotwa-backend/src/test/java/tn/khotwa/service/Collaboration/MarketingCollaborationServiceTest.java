package tn.khotwa.service.collaboration;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.EnumSet;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.khotwa.entity.User.User;
import tn.khotwa.entity.collaboration.Collaboration;
import tn.khotwa.entity.collaboration.MarketingCollaboration;
import tn.khotwa.entity.collaboration.Project;
import tn.khotwa.enums.User.Role;
import tn.khotwa.enums.collaboration.CampaignType;
import tn.khotwa.enums.collaboration.CollaborationStatus;
import tn.khotwa.enums.collaboration.CollaborationType;
import tn.khotwa.enums.collaboration.MarketingCollaborationStatus;
import tn.khotwa.exception.collaboration.AccessDeniedException;
import tn.khotwa.exception.collaboration.BusinessException;
import tn.khotwa.repository.collaboration.MarketingCollaborationRepository;
import tn.khotwa.service.User.CurrentUserService;

@ExtendWith(MockitoExtension.class)
class MarketingCollaborationServiceTest {

    @Mock
    private MarketingCollaborationRepository marketingCollaborationRepository;

    @Mock
    private CollaborationService collaborationService;

    @Mock
    private CurrentUserService currentUserService;

    @Mock
    private CollaborationAuthorizationService authorizationService;

    private MarketingCollaborationService marketingCollaborationService;

    @BeforeEach
    void setUp() {
        marketingCollaborationService = new MarketingCollaborationService(
                marketingCollaborationRepository,
                collaborationService,
                currentUserService,
                authorizationService
        );
    }

    @Test
    void cannotCreateSecondOpenCampaignWhenDraftOrActiveAlreadyExists() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationService.getCollaboration(collaboration.getId())).thenReturn(collaboration);
        when(marketingCollaborationRepository.existsByCollaborationAndStatusIn(
                eq(collaboration),
                eq(EnumSet.of(MarketingCollaborationStatus.DRAFT, MarketingCollaborationStatus.ACTIVE))
        )).thenReturn(true);

        assertThatThrownBy(() -> marketingCollaborationService.createMarketingCollaboration(
                collaboration.getId(),
                "Campaign",
                "Description",
                "Objective",
                CampaignType.CROSS_PROMOTION,
                null,
                null
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("This collaboration already has an open marketing campaign.");

        verify(marketingCollaborationRepository, never()).save(any(MarketingCollaboration.class));
    }

    @Test
    void canCreateNewCampaignAfterPreviousCampaignIsCompleted() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationService.getCollaboration(collaboration.getId())).thenReturn(collaboration);
        when(marketingCollaborationRepository.existsByCollaborationAndStatusIn(
                eq(collaboration),
                eq(EnumSet.of(MarketingCollaborationStatus.DRAFT, MarketingCollaborationStatus.ACTIVE))
        )).thenReturn(false);
        when(marketingCollaborationRepository.save(any(MarketingCollaboration.class))).thenAnswer(invocation -> {
            MarketingCollaboration campaign = invocation.getArgument(0);
            campaign.setId(100L);
            campaign.setStatus(MarketingCollaborationStatus.DRAFT);
            return campaign;
        });

        MarketingCollaboration campaign = marketingCollaborationService.createMarketingCollaboration(
                collaboration.getId(),
                "Campaign",
                "Description",
                "Objective",
                CampaignType.CROSS_PROMOTION,
                null,
                null
        );

        assertThat(campaign.getId()).isEqualTo(100L);
        assertThat(campaign.getTitle()).isEqualTo("Campaign");
        assertThat(campaign.getStatus()).isEqualTo(MarketingCollaborationStatus.DRAFT);
    }

    @Test
    void canCreateNewCampaignAfterPreviousCampaignIsCancelled() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(collaborationService.getCollaboration(collaboration.getId())).thenReturn(collaboration);
        when(marketingCollaborationRepository.existsByCollaborationAndStatusIn(
                eq(collaboration),
                eq(EnumSet.of(MarketingCollaborationStatus.DRAFT, MarketingCollaborationStatus.ACTIVE))
        )).thenReturn(false);
        when(marketingCollaborationRepository.save(any(MarketingCollaboration.class))).thenAnswer(invocation -> invocation.getArgument(0));

        MarketingCollaboration campaign = marketingCollaborationService.createMarketingCollaboration(
                collaboration.getId(),
                "Campaign",
                null,
                "Objective",
                CampaignType.EVENT_PROMOTION,
                LocalDateTime.now(),
                LocalDateTime.now().plusDays(5)
        );

        assertThat(campaign.getCampaignType()).isEqualTo(CampaignType.EVENT_PROMOTION);
        assertThat(campaign.getObjective()).isEqualTo("Objective");
    }

    @Test
    void memberNonOwnerCannotCreateCampaign() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User member = user(2L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);

        when(currentUserService.requireCurrentUser()).thenReturn(member);
        when(collaborationService.getCollaboration(collaboration.getId())).thenReturn(collaboration);
        org.mockito.Mockito.doThrow(new AccessDeniedException("Only the collaboration owner or admin can perform this action."))
                .when(authorizationService)
                .checkCanCreateMarketingCollaboration(member, collaboration);

        assertThatThrownBy(() -> marketingCollaborationService.createMarketingCollaboration(
                collaboration.getId(),
                "Campaign",
                null,
                "Objective",
                CampaignType.CROSS_PROMOTION,
                null,
                null
        ))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessage("Only the collaboration owner or admin can perform this action.");
    }

    @Test
    void ownerCanUpdateCampaignStatus() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration campaign = marketingCampaign(100L, collaboration, MarketingCollaborationStatus.DRAFT);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(marketingCollaborationRepository.findById(campaign.getId())).thenReturn(Optional.of(campaign));
        when(marketingCollaborationRepository.save(campaign)).thenReturn(campaign);

        MarketingCollaboration updated = marketingCollaborationService.updateMarketingCollaborationStatus(
                campaign.getId(),
                MarketingCollaborationStatus.ACTIVE
        );

        assertThat(updated.getStatus()).isEqualTo(MarketingCollaborationStatus.ACTIVE);
        verify(authorizationService).checkCanUpdateMarketingCollaborationStatus(owner, campaign);
    }

    @Test
    void adminCanUpdateCampaignStatus() {
        User owner = user(1L, Role.ENTREPRENEUR);
        User admin = user(99L, Role.ADMIN);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration campaign = marketingCampaign(100L, collaboration, MarketingCollaborationStatus.ACTIVE);

        when(currentUserService.requireCurrentUser()).thenReturn(admin);
        when(marketingCollaborationRepository.findById(campaign.getId())).thenReturn(Optional.of(campaign));
        when(marketingCollaborationRepository.save(campaign)).thenReturn(campaign);

        MarketingCollaboration updated = marketingCollaborationService.updateMarketingCollaborationStatus(
                campaign.getId(),
                MarketingCollaborationStatus.COMPLETED
        );

        assertThat(updated.getStatus()).isEqualTo(MarketingCollaborationStatus.COMPLETED);
        verify(authorizationService).checkCanUpdateMarketingCollaborationStatus(admin, campaign);
    }

    @Test
    void rejectsInvalidCampaignStatusTransition() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration campaign = marketingCampaign(100L, collaboration, MarketingCollaborationStatus.DRAFT);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(marketingCollaborationRepository.findById(campaign.getId())).thenReturn(Optional.of(campaign));

        assertThatThrownBy(() -> marketingCollaborationService.updateMarketingCollaborationStatus(
                campaign.getId(),
                MarketingCollaborationStatus.COMPLETED
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Cannot change marketing campaign status from DRAFT to COMPLETED.");

        verify(marketingCollaborationRepository, never()).save(any(MarketingCollaboration.class));
    }

    @Test
    void completedCampaignCannotBeReactivated() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration campaign = marketingCampaign(100L, collaboration, MarketingCollaborationStatus.COMPLETED);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(marketingCollaborationRepository.findById(campaign.getId())).thenReturn(Optional.of(campaign));

        assertThatThrownBy(() -> marketingCollaborationService.updateMarketingCollaborationStatus(
                campaign.getId(),
                MarketingCollaborationStatus.ACTIVE
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Cannot change marketing campaign status from COMPLETED to ACTIVE.");

        verify(marketingCollaborationRepository, never()).save(any(MarketingCollaboration.class));
    }

    @Test
    void cancelledCampaignCannotBeReactivated() {
        User owner = user(1L, Role.ENTREPRENEUR);
        Collaboration collaboration = collaboration(10L, owner);
        MarketingCollaboration campaign = marketingCampaign(100L, collaboration, MarketingCollaborationStatus.CANCELLED);

        when(currentUserService.requireCurrentUser()).thenReturn(owner);
        when(marketingCollaborationRepository.findById(campaign.getId())).thenReturn(Optional.of(campaign));

        assertThatThrownBy(() -> marketingCollaborationService.updateMarketingCollaborationStatus(
                campaign.getId(),
                MarketingCollaborationStatus.ACTIVE
        ))
                .isInstanceOf(BusinessException.class)
                .hasMessage("Cannot change marketing campaign status from CANCELLED to ACTIVE.");

        verify(marketingCollaborationRepository, never()).save(any(MarketingCollaboration.class));
    }

    private static User user(Long id, Role role) {
        User user = new User();
        user.setIdUser(id);
        user.setRole(role);
        user.setFirstName("User");
        user.setLastName(String.valueOf(id));
        user.setEmailAddress("user" + id + "@example.com");
        user.setPassword("secret");
        return user;
    }

    private static Collaboration collaboration(Long id, User owner) {
        Project project = new Project();
        project.setId(id + 100);
        project.setOwner(owner);
        project.setName("Project " + id);

        Collaboration collaboration = new Collaboration();
        collaboration.setId(id);
        collaboration.setProject(project);
        collaboration.setType(CollaborationType.MARKETING);
        collaboration.setStatus(CollaborationStatus.ACTIVE);
        return collaboration;
    }

    private static MarketingCollaboration marketingCampaign(
            Long id,
            Collaboration collaboration,
            MarketingCollaborationStatus status
    ) {
        MarketingCollaboration campaign = new MarketingCollaboration();
        campaign.setId(id);
        campaign.setCollaboration(collaboration);
        campaign.setTitle("Campaign");
        campaign.setObjective("Objective");
        campaign.setCampaignType(CampaignType.CROSS_PROMOTION);
        campaign.setStatus(status);
        return campaign;
    }
}
