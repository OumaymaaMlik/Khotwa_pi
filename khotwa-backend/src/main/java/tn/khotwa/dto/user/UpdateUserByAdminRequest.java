package tn.khotwa.dto.user;

public record UpdateUserByAdminRequest(String avatar, String emailAddress, String firstName, String lastName, String phoneNumber) {}
