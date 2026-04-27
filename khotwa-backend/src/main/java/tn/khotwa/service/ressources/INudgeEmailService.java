package tn.khotwa.service.ressources;

import tn.khotwa.dto.ressources.StagnationInfo;

public interface INudgeEmailService {

    /**
     * Envoie un e-mail de rappel doux à l'entrepreneur (48h d'inactivité).
     */
    void envoyerNudgeNiveau1(StagnationInfo info);

    /**
     * Envoie une alerte à l'entrepreneur l'informant que son coach est notifié (72h d'inactivité).
     */
    void envoyerNudgeNiveau2Entrepreneur(StagnationInfo info);

    /**
     * Envoie une alerte au coach concernant l'inactivité de son entrepreneur (72h d'inactivité).
     */
    void envoyerNudgeNiveau2Coach(StagnationInfo info);
}