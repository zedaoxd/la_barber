package br.com.bruno.labarber.services;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bruno.labarber.dtos.AppointmentDTO;
import br.com.bruno.labarber.entities.Appointment;
import br.com.bruno.labarber.repositories.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<AppointmentDTO> findByDate(Date date) {
        Date dateStart = new Date(date.getTime());
        Date dateEnd = new Date(date.getTime());

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(dateStart);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        dateStart = calendar.getTime();

        calendar.setTime(dateEnd);
        calendar.set(Calendar.HOUR_OF_DAY, 23);
        calendar.set(Calendar.MINUTE, 59);
        calendar.set(Calendar.SECOND, 59);
        dateEnd = calendar.getTime();

        return appointmentRepository.findByDateBetween(dateStart, dateEnd)
            .stream()
            .map(AppointmentDTO::new)
            .toList();
    }

    public AppointmentDTO save(AppointmentDTO dto) {
        Appointment entity = dto.toEntity();
        entity.setId(null);

        if (appointmentRepository.existsByDateAndBarberId(entity.getDate(), entity.getBarber().getId())) {
            throw new RuntimeException("The hour is not available");
        }

        return new AppointmentDTO(appointmentRepository.save(entity));
    }
    
}
