package tn.khotwa.service.User;

import org.springframework.stereotype.Component;
import tn.khotwa.DTO.user.UserResponse;
import tn.khotwa.entity.User.User;

@Component
public class UserMapper {

    public UserResponse toResponse(User user) {
        return UserResponse.fromEntity(user);
    }
}
