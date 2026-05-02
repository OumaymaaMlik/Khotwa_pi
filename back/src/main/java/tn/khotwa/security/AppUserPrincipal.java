package tn.khotwa.security;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import tn.khotwa.entity.user.User;
import tn.khotwa.enums.user.Role;

import java.util.Collection;
import java.util.List;

@Getter
public class AppUserPrincipal implements UserDetails {

    private final Long idUser;
    private final String emailAddress;
    private final String password;
    private final Role role;
    private final boolean mustChangePassword;
    private final List<GrantedAuthority> authorities;

    public AppUserPrincipal(User user) {
        this.idUser = user.getIdUser();
        this.emailAddress = user.getEmailAddress();
        this.password = user.getPassword();
        this.role = user.getRole();
        this.mustChangePassword = user.isMustChangePassword();
        this.authorities = List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getUsername() {
        return emailAddress;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}