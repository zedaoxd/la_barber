package br.com.bruno.labarber.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.bruno.labarber.entities.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    
    boolean existsByDateAndBarberId(Date date, Long barberId);

    //List<Appointment> findByDate(Date date);

    //List<Appointment> findByDateBetween(Date start, Date end);

    List<Appointment> findByDateBetweenAndBarberId(Date start, Date end, Long barberId);
}
