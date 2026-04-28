package tn.khotwa.controller.ressources;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.repository.ressources.TagRepository;

import java.util.Map;

@RestController
@RequestMapping("/api/tags")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TagController {

    private final TagRepository tagRepo;

    @GetMapping
    public ResponseEntity<Map<String, Object>> lister() {
        return ResponseEntity.ok(Map.of("success", true, "data", tagRepo.findAllProjectedBy()));
    }
}
