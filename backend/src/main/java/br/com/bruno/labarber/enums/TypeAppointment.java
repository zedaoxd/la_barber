package br.com.bruno.labarber.enums;

public enum TypeAppointment {
    BARBA("BARBA"), 
    CORTE("CORTE"), 
    BARBA_CORTE("BARBA_CORTE");

    private final String type;

    private TypeAppointment(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
