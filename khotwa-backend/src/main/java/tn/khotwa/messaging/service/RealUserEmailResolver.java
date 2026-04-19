package tn.khotwa.messaging.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.khotwa.service.UserServices.IUserService;

@Service
@RequiredArgsConstructor
public class RealUserEmailResolver implements UserEmailResolver {

    private final IUserService userService;

    @Override
    public String getEmailByUserId(Long userId) {
        try {
            var user = userService.getRequiredUser(userId);
            return user.getEmailAddress();
        } catch (Exception e) {
            return "unknown@khotwa.tn";
        }
    }

    @Override
    public String getNameByUserId(Long userId) {
        try {
            var user = userService.getRequiredUser(userId);
            return user.getFirstName() + " " + user.getLastName();
        } catch (Exception e) {
            return "User " + userId;
        }
    }
}