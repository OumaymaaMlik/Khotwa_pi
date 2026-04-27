package tn.khotwa.config.configtalent;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import tn.khotwa.entity.talent.TalentProfile;
import tn.khotwa.service.sertalent.TalentService;

import java.io.IOException;
import java.util.Map;

@Component
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private TalentService userService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        OAuth2AuthenticationToken token = (OAuth2AuthenticationToken) authentication;

        Map<String, Object> attributes = token.getPrincipal().getAttributes();

        String linkedinId = (String) attributes.get("id");
        String name = (String) attributes.get("localizedFirstName");
        String lastName = (String) attributes.get("localizedLastName");

        String fullName = name + " " + lastName;

        TalentProfile user = userService.findByLinkedinId(linkedinId)
                .orElse(new TalentProfile());

        user.setLinkedinId(linkedinId);
        user.setName(fullName);

        userService.saveOrUpdate(user);

        // redirect frontend
        response.sendRedirect("http://localhost:4200/oauth-success");
    }
}