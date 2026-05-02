package tn.khotwa.service.messaging;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;


@Service
public class ProfanityFilterService {
    private Set<String> badWords = new HashSet<>();

    @PostConstruct
    public void init() {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                getClass().getResourceAsStream("/bad-words.txt")))) {
            reader.lines()
                    .map(String::trim)
                    .filter(word -> word.length() > 1)
                    .forEach(word -> badWords.add(word.toLowerCase()));
        } catch (Exception e) {
            System.err.println("Could not load profanity dictionary");
        }
    }

    public String filter(String input) {
        if (input == null || input.trim().isEmpty()) return input;

        String result = input;

        for (String badWord : badWords) {
            String fuzzyPattern = "(?i)\\b" + buildFuzzyPattern(badWord) + "\\b";
            result = result.replaceAll(fuzzyPattern, "****");
        }
        return result;
    }

    private String buildFuzzyPattern(String word) {
        String[] letters = word.split("");
        return String.join("[\\W_]*",
                Arrays.stream(letters)
                        .map(this::getCharacterVariations)
                        .toArray(String[]::new)
        );
    }

    private String getCharacterVariations(String letter) {
        return switch (letter.toLowerCase()) {
            case "a" -> "[a@4]+";
            case "o" -> "[o0]+";
            case "i" -> "[i1!|]+";
            case "s" -> "[s$5]+";
            case "e" -> "[e3]+";
            case "t" -> "[t7]+";
            case "b" -> "[b8]+";
            case "g" -> "[g9]+";
            default -> Pattern.quote(letter) + "+";
        };
    }
}