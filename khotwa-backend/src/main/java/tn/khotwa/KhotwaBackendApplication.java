package tn.khotwa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
//@EnableScheduling
public class KhotwaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(KhotwaBackendApplication.class, args);
    }

}
