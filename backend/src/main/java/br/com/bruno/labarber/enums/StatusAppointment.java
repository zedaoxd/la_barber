package br.com.bruno.labarber.enums;

public enum StatusAppointment {
    PENDING("PENDING"), 
    CANCELED("CANCELED"), 
    FINISHED("FINISHED"), 
    MISSED("MISSED");

    private String status;

    private StatusAppointment(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
