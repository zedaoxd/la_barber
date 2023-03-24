package br.com.bruno.labarber.controllers;

import java.net.URI;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bruno.labarber.dtos.AppointmentDTO;
import br.com.bruno.labarber.services.AppointmentService;

@RestController
@RequestMapping(value = "/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping(value = "/{barberId}/{millis}")
    public ResponseEntity<List<AppointmentDTO>> findByDate(@PathVariable("millis") Long millis, @PathVariable("barberId") Long barberId) {
        return ResponseEntity.ok(appointmentService.findByDate(new Date(millis), barberId));
    }

    @GetMapping(value = "/history/{userId}")
    public ResponseEntity<List<AppointmentDTO>> findHistory(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(appointmentService.findHistory(userId));
    }

    @GetMapping(value = "/pending/{userId}")
    public ResponseEntity<AppointmentDTO> getAppointmentPending(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(appointmentService.getAppointmentPending(userId));
    }

    @PostMapping
    public ResponseEntity<AppointmentDTO> save(@RequestBody AppointmentDTO dto) {
        dto = appointmentService.save(dto);
        URI uri = URI.create("/appointments/" + dto.getId());
        return ResponseEntity.created(uri).body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        appointmentService.changeStatusToCanceled(id);
        return ResponseEntity.noContent().build();
    }
    
}
