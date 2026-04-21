package tn.khotwa.exception.Collaboration;

public class BusinessException extends IllegalStateException {

    public BusinessException(String message) {
        super(message);
    }
}