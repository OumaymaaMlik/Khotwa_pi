package tn.khotwa.repository.collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.collaboration.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

	List<Project> findAllByOwner_IdUserOrderByIdDesc(Long ownerId);
}
