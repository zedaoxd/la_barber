package br.com.bruno.labarber.exceptions;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class ValidationError extends StandardError {

    private List<FieldMessage> errors = new ArrayList<>();

    public ValidationError() {
    }

    public ValidationError(
            Instant timestamp, 
            Integer status, 
            String error, 
            String message, 
            String path, 
            List<FieldMessage> errors
        ) {
        super(timestamp, status, error, message, path);
        this.errors = errors;
    }

    public List<FieldMessage> getErrors() {
        return errors;
    }

    public void addError(String fieldName, String message) {
        errors.add(new FieldMessage(fieldName, message));
    }
}
