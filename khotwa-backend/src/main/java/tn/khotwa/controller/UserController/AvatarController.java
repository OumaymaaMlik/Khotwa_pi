package tn.khotwa.controller.UserController;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.khotwa.service.UserServices.impl.AvatarService;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AvatarController {

    private final AvatarService avatarService;


    @PostMapping(value = "/me/avatar", consumes = "multipart/form-data")
    public ResponseEntity<Map<String, String>> uploadAvatar(
            @RequestParam("file") MultipartFile file) {

        String avatarUrl = avatarService.storeAvatar(file);
        return ResponseEntity.ok(Map.of("avatarUrl", avatarUrl));
    }
}