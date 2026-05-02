package tn.khotwa.service.user;

import org.springframework.stereotype.Component;
import tn.khotwa.dto.user.UserResponse;
import tn.khotwa.entity.user.User;

@Component
public class UserMapper {

    public UserResponse toResponse(User user) {
        return UserResponse.fromEntity(user);
    }
}
