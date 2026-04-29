package tn.khotwa.exception.User;

public class ForbiddenAdminCreationException extends RuntimeException {

    public ForbiddenAdminCreationException(String message) {
        super(message);
    }
}