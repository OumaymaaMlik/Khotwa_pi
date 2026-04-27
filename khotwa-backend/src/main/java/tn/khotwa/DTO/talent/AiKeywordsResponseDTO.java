package tn.khotwa.DTO.talent;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiKeywordsResponseDTO {
    private List<String> keywords;
    private List<String> suggestedRoles;
    private String summary;
}
