package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.talent.AiRecommendation;
import tn.khotwa.repository.repotalent.AiRecommendationRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AiRecommendationService {

    private final AiRecommendationRepository repository;

    public AiRecommendation save(AiRecommendation.RecommendationType type,
                                 String content,
                                 double confidenceScore,
                                 Long relatedJobId,
                                 Long relatedTalentId) {
        AiRecommendation entity = AiRecommendation.builder()
                .type(type)
                .content(content)
                .confidenceScore(confidenceScore)
                .createdAt(LocalDateTime.now())
                .relatedJobId(relatedJobId)
                .relatedTalentId(relatedTalentId)
                .build();
        return repository.save(entity);
    }

    public List<AiRecommendation> findAll() {
        return repository.findAllByOrderByCreatedAtDesc();
    }
}
