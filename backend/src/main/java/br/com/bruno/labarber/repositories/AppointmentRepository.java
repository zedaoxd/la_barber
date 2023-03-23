package br.com.bruno.labarber.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bruno.labarber.entities.Appointment;
import br.com.bruno.labarber.enums.StatusAppointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    
    boolean existsByDateAndBarberId(Date date, Long barberId);

    List<Appointment> findByClientIdAndStatusIn(Long userId, List<StatusAppointment> statusAppointments);

    List<Appointment> findByDateBetweenAndBarberId(Date start, Date end, Long barberId);
}
