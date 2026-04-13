package tn.khotwa.dto.user;

public record UpdateProfileRequest(String avatar, String emailAddress, String firstName, String lastName, String phoneNumber) {}
