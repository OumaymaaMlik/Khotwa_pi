package tn.khotwa.service.messaging;

public interface UserEmailResolver {
    String getEmailByUserId(Long userId);
    String getNameByUserId(Long userId);
}