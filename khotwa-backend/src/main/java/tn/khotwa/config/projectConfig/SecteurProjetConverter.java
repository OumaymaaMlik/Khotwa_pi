package tn.khotwa.config.projectConfig;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import tn.khotwa.enums.projectEnum.SecteurProjet;

@Converter
public class SecteurProjetConverter implements AttributeConverter<SecteurProjet, String> {

    @Override
    public String convertToDatabaseColumn(SecteurProjet attribute) {
        return attribute == null ? null : attribute.name();
    }

    @Override
    public SecteurProjet convertToEntityAttribute(String dbData) {
        return SecteurProjet.fromValue(dbData);
    }
}
