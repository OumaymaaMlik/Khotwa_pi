package tn.khotwa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.khotwa.entity.Evenement;
import tn.khotwa.enums.EvenementStatus;
import tn.khotwa.service.IEvenementService;

import java.util.List;

@RestController
@RequestMapping("/evenement")
@CrossOrigin(origins = "http://localhost:4200")
public class EvenementController {

    @Autowired
    private IEvenementService evenementService;
    @PostMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public Evenement addEvenement(@RequestBody Evenement evenement) {
        return evenementService.addEvenement(evenement);
    }

    @PutMapping("/update/{idEvenement}")
    public Evenement updateEvenement(@PathVariable Long idEvenement,
                                     @RequestBody Evenement evenement) {
        return evenementService.updateEvenement(idEvenement, evenement);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEvenement(@PathVariable Long id) {
        evenementService.deleteEvenement(id);
    }

    @GetMapping("/get/{id}")
    public Evenement getEvenementById(@PathVariable Long id) {
        return evenementService.findEvenementById(id);
    }

    @GetMapping("/getAll")
    public List<Evenement> getAllEvenements() {
        return evenementService.findAllEvenements();
    }

    @PostMapping("/participer/{idEvenement}/{idUser}")
    public Evenement addParticipant(@PathVariable Long idEvenement,
                                    @PathVariable Long idUser) {
        return evenementService.addParticipant(idEvenement, idUser);
    }

    // ✅ CORRECTION IMPORTANTE : ENUM OK
    @PutMapping("/update-status/{idEvenement}")
    public void updateStatus(@PathVariable Long idEvenement,
                             @RequestParam EvenementStatus statut) {
        evenementService.changeStatus(idEvenement, statut);
    }

    @GetMapping("/admin-events")
    public List<Evenement> getAdminEvents() {
        return evenementService.findAdminEvents();
    }

    @GetMapping("/my-plan/{idUser}")
    public List<Evenement> getMyEvents(@PathVariable Long idUser) {
        return evenementService.getVisibleEventsForUser(idUser);
    }

    @GetMapping("/my-plan/strict/{idUser}")
    public List<Evenement> getStrictEvents(@PathVariable Long idUser) {
        return evenementService.getStrictEventsForUser(idUser);
    }

    @GetMapping("/free/all")
    public List<Evenement> getAllFreeEvents() {
        return evenementService.getAllFreeEvents();
    }

    @GetMapping("/freeEvenets/search")
    public List<Evenement> searchFreeEvents(
            @RequestParam(required = false) Integer month,
            @RequestParam(required = false) String type) {
        return evenementService.searchFreeEvents(month, type);
    }
}