package tn.khotwa.dto.user;

public record RegisterRequest(String avatar, String emailAddress, String firstName, String lastName, String password, String phoneNumber, String role, String startup) {}
