package br.com.bruno.labarber.enums;

public enum TypeUser {
    CLIENT("client"), BARBER("barber");

    private final String type;

    private TypeUser(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
