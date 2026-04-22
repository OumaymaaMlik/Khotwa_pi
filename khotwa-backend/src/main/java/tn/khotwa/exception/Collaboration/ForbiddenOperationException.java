package tn.khotwa.exception.collaboration;

public class ForbiddenOperationException extends AccessDeniedException {

    public ForbiddenOperationException(String message) {
        super(message);
    }
}
