package br.com.bruno.labarber.controllers;

import java.net.URI;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.bruno.labarber.dtos.AppointmentDTO;
import br.com.bruno.labarber.services.AppointmentService;

@RestController
@RequestMapping(value = "/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public ResponseEntity<List<AppointmentDTO>> findByDate(@RequestParam Long millis) {
        return ResponseEntity.ok(appointmentService.findByDate(new Date(millis)));
    }

    @PostMapping
    public ResponseEntity<AppointmentDTO> save(@RequestBody AppointmentDTO dto) {
        dto = appointmentService.save(dto);
        URI uri = URI.create("/appointments/" + dto.getId());
        return ResponseEntity.created(uri).body(dto);
    }
    
}