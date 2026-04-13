package tn.khotwa.exception.UserException;

public class ForbiddenAdminCreationException extends RuntimeException {
    public ForbiddenAdminCreationException(String message) {
        super(message);
    }
}
