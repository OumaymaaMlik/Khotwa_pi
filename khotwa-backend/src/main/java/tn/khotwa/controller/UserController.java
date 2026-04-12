package tn.khotwa.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.Evenement;
import tn.khotwa.entity.User;
import tn.khotwa.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class UserController {

    final UserService userService;

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping("/update/{idUser}")
    public User updateUser(@PathVariable long idUser, @RequestBody User user) {
        return userService.updateUser(idUser, user);
    }

    @DeleteMapping("/delete/{idUser}")
    public void deleteUser(@PathVariable long idUser) {
        userService.deleteUser(idUser);
    }

    @GetMapping("/findAll")
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/findById/{idUser}")
    public User findUserById(@PathVariable long idUser) {
        return userService.findUserById(idUser);
    }

    @GetMapping("/{idUser}/createdEvents")
    public List<Evenement> getCreatedEvents(@PathVariable long idUser) {
        return userService.getCreatedEvents(idUser);
    }


    @GetMapping("/{idUser}/participatedEvents")
    public List<Evenement> getParticipatedEvents(@PathVariable long idUser) {
        return userService.getParticipatedEvents(idUser);
    }


    @GetMapping("/eventsByAdmin")
    public List<Evenement> getEventsCreatedByAdmin() {
        return userService.getEventsCreatedByAdmin();
    }
}
