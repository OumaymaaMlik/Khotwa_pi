package tn.khotwa.exception.userException;

public class ForbiddenAdminCreationException extends RuntimeException {

    public ForbiddenAdminCreationException(String message) {
        super(message);
    }
}