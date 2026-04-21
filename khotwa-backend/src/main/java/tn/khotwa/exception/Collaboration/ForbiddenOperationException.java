package tn.khotwa.exception.Collaboration;

public class ForbiddenOperationException extends AccessDeniedException {

    public ForbiddenOperationException(String message) {
        super(message);
    }
}