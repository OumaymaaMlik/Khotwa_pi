package tn.khotwa.DTO.user;

import tn.khotwa.enums.User.Role;

public record AuthResponse(
	String token,
	Long idUser,
	String emailAddress,
	Role role,
	boolean mustChangePassword
) {
}