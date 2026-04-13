package tn.khotwa.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tn.khotwa.entity.UserEntities.User;
import tn.khotwa.repository.UserRepo.UserRepository;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String emailAddress) throws UsernameNotFoundException {
        String normalizedEmail = emailAddress.trim().toLowerCase();

        User user = userRepository.findByEmailAddress(normalizedEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + normalizedEmail));

        // ✅ Retourne AppUserPrincipal (et non pas Spring's User)
        // Ceci permet à CurrentUserServiceImpl de caster correctement le principal
        return new AppUserPrincipal(user);
    }
}
