package tn.khotwa.enums.subscriptionEnums;

public enum RiskLevel {
    LOW, MEDIUM, HIGH;

    public static RiskLevel from(int score) {
        if (score >= 60) return HIGH;
        if (score >= 30) return MEDIUM;
        return LOW;
    }
}
