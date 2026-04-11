package tn.khotwa.biblio.projection.ressources;

public interface CategorieView {
    Long getId();
    String getNom();
    String getDescription();
    String getCouleur();
    String getIcone();
    String getSecteur(); // secteur d'activité lié (null = transversal)
}
