package tn.khotwa.messaging.service;

public interface UserEmailResolver {
    String getEmailByUserId(Long userId);
    String getNameByUserId(Long userId);
}