package br.com.bruno.labarber.validations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.bruno.labarber.dtos.UserInsertDTO;
import br.com.bruno.labarber.entities.User;
import br.com.bruno.labarber.repositories.UserRepository;
import br.com.bruno.labarber.exceptions.FieldMessage;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO>{
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public void initialize(UserInsertValid ann) {
    }

    @Override
    public boolean isValid(UserInsertDTO objDto, ConstraintValidatorContext context) {
        List<FieldMessage> list = new ArrayList<>();

        Optional<User> optional = userRepository.findByEmail(objDto.getEmail());
        User user = optional.orElse(null);

        if (user != null) {
            list.add(new FieldMessage("email", "This email already exists"));
        }

        for (FieldMessage e : list) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
                    .addConstraintViolation();
        }
        return list.isEmpty();
    }
    
}
