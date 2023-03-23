package br.com.bruno.labarber.services;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.bruno.labarber.dtos.AppointmentDTO;
import br.com.bruno.labarber.entities.Appointment;
import br.com.bruno.labarber.enums.StatusAppointment;
import br.com.bruno.labarber.repositories.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Transactional(readOnly = true)
    public List<AppointmentDTO> findByDate(Date date, Long barberId) {
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

        return appointmentRepository.findByDateBetweenAndBarberId(dateStart, dateEnd, barberId)
            .stream()
            .map(AppointmentDTO::new)
            .toList();
    }

    @Transactional
    public AppointmentDTO save(AppointmentDTO dto) {
        Appointment entity = dto.toEntity();
        entity.setId(null);

        if (appointmentRepository.existsByDateAndBarberId(entity.getDate(), entity.getBarber().getId())) {
            throw new RuntimeException("The hour is not available");
        }

        return new AppointmentDTO(appointmentRepository.save(entity));
    }
    
    @Transactional(readOnly = true)
    public List<AppointmentDTO> findHistory(Long userId) {
        List<StatusAppointment> list = List.of(StatusAppointment.FINISHED, StatusAppointment.CANCELED, StatusAppointment.MISSED);
        return appointmentRepository.findByClientIdAndStatusIn(userId, list)
            .stream()
            .map(AppointmentDTO::new)
            .toList();
    }
}
