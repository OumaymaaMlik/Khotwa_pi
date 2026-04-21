package tn.khotwa.repository.Collaboration;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.khotwa.entity.Collaboration.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

	List<Project> findAllByOwner_IdUserOrderByIdDesc(Long ownerId);
}