package br.com.bruno.labarber.enums;

public enum TypeUser {
    CLIENT("CLIENT"), BARBER("BARBER");

    private final String type;

    private TypeUser(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
