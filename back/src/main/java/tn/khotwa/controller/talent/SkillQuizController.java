package tn.khotwa.controller.talent;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.dto.talent.QuizQuestionDTO;
import tn.khotwa.dto.talent.SkillQuizResultDTO;
import tn.khotwa.service.sertalent.SkillQuizService;
import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
@RequiredArgsConstructor
public class SkillQuizController {

    private final SkillQuizService quizService;

    @GetMapping("/generate")
    public ResponseEntity<List<QuizQuestionDTO>> generateQuiz(@RequestParam String skill) {
        return ResponseEntity.ok(quizService.generateQuizForSkill(skill));
    }

    @PostMapping("/submit")
    public ResponseEntity<SkillQuizResultDTO> submitQuiz(@RequestParam Long talentId,
                                                         @RequestParam String skill,
                                                         @RequestParam Integer scorePercentage) {
        return ResponseEntity.ok(quizService.submitQuizResult(talentId, skill, scorePercentage));
    }
}
