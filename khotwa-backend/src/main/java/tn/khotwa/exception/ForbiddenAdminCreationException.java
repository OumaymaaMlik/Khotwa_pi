package tn.khotwa.exception;

public class ForbiddenAdminCreationException extends RuntimeException {

    public ForbiddenAdminCreationException(String message) {
        super(message);
    }
}