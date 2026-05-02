package tn.khotwa.enums.eventsEnums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

public enum EvenementType {
    FORMATION,
    PITCH,
    WEBINAR,
    COACHING;

    @JsonCreator
    public static EvenementType fromJson(String value) {
        if (value == null || value.isBlank()) return null;
        return EvenementType.valueOf(value.toUpperCase());
    }

    @JsonValue
    public String toJson() {
        return this.name();
    }

    @Converter(autoApply = true)
    public static class CaseInsensitiveConverter
            implements AttributeConverter<EvenementType, String> {

        @Override
        public String convertToDatabaseColumn(EvenementType attribute) {
            return attribute == null ? null : attribute.name(); // toujours MAJUSCULE
        }

        @Override
        public EvenementType convertToEntityAttribute(String dbData) {
            if (dbData == null || dbData.isBlank()) return null;
            return EvenementType.valueOf(dbData.toUpperCase()); // tolère minuscule
        }
    }
}