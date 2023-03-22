package br.com.bruno.labarber.dtos;

import java.util.Date;

import br.com.bruno.labarber.entities.Appointment;
import br.com.bruno.labarber.entities.User;
import br.com.bruno.labarber.enums.StatusAppointment;
import br.com.bruno.labarber.enums.TypeAppointment;

public class AppointmentDTO {
    
    private Long id;
    private Long millis;
    private Long barberId;
    private Long clientId;
    private String typeAppointment;
    private String statusAppointment;

    public AppointmentDTO() {
    }

    public AppointmentDTO(Long id, Long millis, Long barberId, Long clientId, String typeAppointment, String statusAppointment) {
        this.id = id;
        this.millis = millis;
        this.barberId = barberId;
        this.clientId = clientId;
        this.typeAppointment = typeAppointment;
        this.statusAppointment = statusAppointment;
    }

    public AppointmentDTO(Appointment entity) {
        this.id = entity.getId();
        this.millis = entity.getDate().getTime();
        this.barberId = entity.getBarber().getId();
        this.clientId = entity.getClient().getId();
        this.typeAppointment = entity.getTypeAppointment().getType();
        this.statusAppointment = entity.getStatusAppointment().getStatus();
    }

    public Appointment toEntity() {
        User barber = new User();
        barber.setId(barberId);
        User client = new User();
        client.setId(clientId);
        return new Appointment(
            id, 
            new Date(this.millis), 
            client, 
            barber, 
            TypeAppointment.valueOf(typeAppointment), 
            StatusAppointment.valueOf(statusAppointment)
        );
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatusAppointment() {
        return statusAppointment;
    }

    public void setStatusAppointment(String statusAppointment) {
        this.statusAppointment = statusAppointment;
    }

    public String getTypeAppointment() {
        return typeAppointment;
    }

    public void setTypeAppointment(String typeAppointment) {
        this.typeAppointment = typeAppointment;
    }

    public Long getMillis() {
        return millis;
    }

    public void setMillis(Long millis) {
        this.millis = millis;
    }

    public Long getBarberId() {
        return barberId;
    }

    public void setBarberId(Long barberId) {
        this.barberId = barberId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    @Override
    public String toString() {
        return "AppointmentDTO [barberId=" + barberId + ", clientId=" + clientId + ", date=" + millis + ", id=" + id + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((barberId == null) ? 0 : barberId.hashCode());
        result = prime * result + ((clientId == null) ? 0 : clientId.hashCode());
        result = prime * result + ((millis == null) ? 0 : millis.hashCode());
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        AppointmentDTO other = (AppointmentDTO) obj;
        if (barberId == null) {
            if (other.barberId != null)
                return false;
        } else if (!barberId.equals(other.barberId))
            return false;
        if (clientId == null) {
            if (other.clientId != null)
                return false;
        } else if (!clientId.equals(other.clientId))
            return false;
        if (millis == null) {
            if (other.millis != null)
                return false;
        } else if (!millis.equals(other.millis))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
}
