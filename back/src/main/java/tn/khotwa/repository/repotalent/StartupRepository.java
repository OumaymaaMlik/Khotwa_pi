// StartupRepository.java
package tn.khotwa.repository.repotalent;

import tn.khotwa.entity.talent.Startup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StartupRepository extends JpaRepository<Startup, Long> {}