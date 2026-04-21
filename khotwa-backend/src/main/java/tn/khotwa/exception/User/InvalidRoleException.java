package tn.khotwa.exception.User;

public class InvalidRoleException extends RuntimeException {

    public InvalidRoleException(String message) {
        super(message);
    }
}