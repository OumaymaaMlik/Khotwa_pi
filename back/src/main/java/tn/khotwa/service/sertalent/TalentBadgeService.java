package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.dto.talent.TalentBadgeDTO;
import tn.khotwa.entity.talent.TalentBadge;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.TalentBadgeRepository;
import tn.khotwa.repository.repotalent.TalentProfileRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TalentBadgeService {

    private final TalentBadgeRepository badgeRepository;
    private final TalentProfileRepository talentRepository;

    public TalentBadgeDTO assignBadge(Long talentId, String badgeType, String description) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent not found"));

        TalentBadge badge = TalentBadge.builder()
                .talent(talent)
                .badgeType(badgeType)
                .description(description)
                .dateObtenu(LocalDateTime.now())
                .build();
        
        badge = badgeRepository.save(badge);
        return mapToDto(badge);
    }

    public List<TalentBadgeDTO> getBadgesForTalent(Long talentId) {
        return badgeRepository.findByTalentId(talentId)
                .stream().map(this::mapToDto).collect(Collectors.toList());
    }

    private TalentBadgeDTO mapToDto(TalentBadge b) {
        return TalentBadgeDTO.builder()
                .id(b.getId())
                .talentId(b.getTalent().getId())
                .badgeType(b.getBadgeType())
                .description(b.getDescription())
                .dateObtenu(b.getDateObtenu().toString())
                .build();
    }
}
