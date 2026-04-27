package tn.khotwa.service.EvenementService;

import tn.khotwa.entity.evenement.Evenement;

import java.util.List;
import java.util.Map;

public interface IAiEvenementService {
    Evenement generateEventFromTopPopular();

    List<Map<String, Object>> getTopEventsStats();
}
