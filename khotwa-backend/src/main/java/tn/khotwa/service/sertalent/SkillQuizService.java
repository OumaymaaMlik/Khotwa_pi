package tn.khotwa.service.sertalent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.DTO.talent.QuizQuestionDTO;
import tn.khotwa.DTO.talent.SkillQuizResultDTO;
import tn.khotwa.entity.talent.SkillQuizResult;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.repository.repotalent.SkillQuizResultRepository;
import tn.khotwa.repository.repotalent.TalentProfileRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SkillQuizService {

    private final SkillQuizResultRepository quizResultRepository;
    private final TalentProfileRepository talentRepository;
    private final TalentBadgeService badgeService;

    public List<QuizQuestionDTO> generateQuizForSkill(String skill) {
        // In a real scenario, this would call Gemini AI to generate a 10 question quiz.
        // For demonstration, we return a couple of static questions.
        List<QuizQuestionDTO> quiz = new ArrayList<>();
        quiz.add(QuizQuestionDTO.builder()
                .question("What is the main purpose of the core concept in " + skill + "?")
                .options(List.of("A", "B", "C", "D"))
                .correctOptionIndex(0)
                .explanation("A is correct because it defines the core principle.")
                .build());
        quiz.add(QuizQuestionDTO.builder()
                .question("Which of the following is a common anti-pattern in " + skill + "?")
                .options(List.of("Option 1", "Option 2", "Option 3", "Option 4"))
                .correctOptionIndex(2)
                .explanation("Option 3 introduces coupling.")
                .build());
        return quiz;
    }

    public SkillQuizResultDTO submitQuizResult(Long talentId, String skill, Integer scorePercentage) {
        TalentProfile talent = talentRepository.findById(talentId)
                .orElseThrow(() -> new RuntimeException("Talent not found"));

        boolean passed = scorePercentage >= 75;
        
        SkillQuizResult result = SkillQuizResult.builder()
                .talent(talent)
                .skill(skill)
                .scorePercentage(scorePercentage)
                .verifiedBadgeAwarded(passed)
                .datePassed(LocalDateTime.now())
                .build();
        
        result = quizResultRepository.save(result);

        if (passed) {
            badgeService.assignBadge(talentId, skill + " Vérifié", "A réussi le test de compétence avec " + scorePercentage + "%");
        }

        return SkillQuizResultDTO.builder()
                .id(result.getId())
                .talentId(talentId)
                .skill(skill)
                .scorePercentage(scorePercentage)
                .verifiedBadgeAwarded(passed)
                .datePassed(result.getDatePassed().toString())
                .build();
    }
}
