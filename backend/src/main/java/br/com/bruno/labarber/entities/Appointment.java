package br.com.bruno.labarber.entities;

import java.util.Date;

import br.com.bruno.labarber.enums.StatusAppointment;
import br.com.bruno.labarber.enums.TypeAppointment;
import jakarta.persistence.*;

@Entity(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "column_date")
    private Date date;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_appointment")
    private TypeAppointment typeAppointment;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_appointment")
    private StatusAppointment statusAppointment;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private User client;

    @ManyToOne
    @JoinColumn(name = "barber_id")
    private User barber;

    public Appointment() {
    }

    public Appointment(Long id, Date date, User client, User barber, TypeAppointment typeAppointment, StatusAppointment statusAppointment) {
        this.id = id;
        this.date = date;
        this.client = client;
        this.barber = barber;
        this.typeAppointment = typeAppointment;
        this.statusAppointment = statusAppointment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public StatusAppointment getStatusAppointment() {
        return statusAppointment;
    }

    public void setStatusAppointment(StatusAppointment statusAppointment) {
        this.statusAppointment = statusAppointment;
    }

    public TypeAppointment getTypeAppointment() {
        return typeAppointment;
    }

    public void setTypeAppointment(TypeAppointment typeAppointment) {
        this.typeAppointment = typeAppointment;
    }

    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
    }

    public User getBarber() {
        return barber;
    }

    public void setBarber(User barber) {
        this.barber = barber;
    }

    @Override
    public String toString() {
        return "Appointments [barber=" + barber + ", client=" + client + ", date=" + date + ", id=" + id + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((barber == null) ? 0 : barber.hashCode());
        result = prime * result + ((client == null) ? 0 : client.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
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
        Appointment other = (Appointment) obj;
        if (barber == null) {
            if (other.barber != null)
                return false;
        } else if (!barber.equals(other.barber))
            return false;
        if (client == null) {
            if (other.client != null)
                return false;
        } else if (!client.equals(other.client))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        } else if (!date.equals(other.date))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
