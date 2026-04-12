package tn.khotwa.dto.user;

import tn.khotwa.enums.Role;

public record AuthResponse(
	String token,
	Long idUser,
	String email,
	Role role,
	boolean mustChangePassword
) {
}