package tn.khotwa.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.user.User;
import tn.khotwa.repository.user.UserRepository;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
        String normalizedEmail = emailAddress.trim().toLowerCase();

        User user = userRepository.findByEmailAddress(normalizedEmail)
                .orElseThrow(() -> new UsernameNotFoundException("user not found: " + normalizedEmail));

        // ✅ Retourne AppUserPrincipal (et non pas Spring's user)
        // Ceci permet à CurrentUserServiceImpl de caster correctement le principal
        return new AppUserPrincipal(user);
    }
}