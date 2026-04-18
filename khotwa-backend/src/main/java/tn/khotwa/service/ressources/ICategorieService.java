package tn.khotwa.service.ressources;

import tn.khotwa.projection.ressources.CategorieView;

import java.util.List;

public interface ICategorieService {

    List<CategorieView> listerToutes();
    CategorieView getParId(Long id);

    CategorieView creer(String nom, String description, String couleur, String icone);

    CategorieView mettreAJour(Long id, String nom, String description, String couleur, String icone);

    void supprimer(Long id);
}
