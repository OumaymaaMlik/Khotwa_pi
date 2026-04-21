package tn.khotwa.exception.User;

public class EmailAlreadyUsedException extends RuntimeException {

    public EmailAlreadyUsedException(String message) {
        super(message);
    }
}