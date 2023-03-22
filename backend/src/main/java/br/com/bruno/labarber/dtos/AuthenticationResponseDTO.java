package br.com.bruno.labarber.dtos;

public class AuthenticationResponseDTO {
    
    private UserDTO user;
    private String token;


    public AuthenticationResponseDTO() {
    }

    public AuthenticationResponseDTO(String token, UserDTO dto) {
        this.user = dto;
        this.token = token;
    }

    public UserDTO getUser() {
        return this.user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
