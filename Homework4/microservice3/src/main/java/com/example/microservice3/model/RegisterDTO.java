package com.example.microservice3.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDTO {
    String username;
    String password;
    String firstName;
    String lastName;
    String email;
}