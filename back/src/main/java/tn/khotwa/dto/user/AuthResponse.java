package tn.khotwa.dto.user;

import tn.khotwa.enums.user.Role;

public record AuthResponse(
	String token,
	Long idUser,
	String emailAddress,
	Role role,
	boolean mustChangePassword
) {
}