package br.com.bruno.labarber.dtos;

public class AuthenticationResponseDTO {
    
    private Long id;
    private String token;

    public AuthenticationResponseDTO() {
    }

    public AuthenticationResponseDTO(String token, Long id) {
        this.id = id;
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
