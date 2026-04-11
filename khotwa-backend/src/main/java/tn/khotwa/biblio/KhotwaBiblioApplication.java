package tn.khotwa.biblio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class KhotwaBiblioApplication {

    public static void main(String[] args) {
        SpringApplication.run(KhotwaBiblioApplication.class, args);
    }

    /** Bean PasswordEncoder partagé dans tout le projet */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
