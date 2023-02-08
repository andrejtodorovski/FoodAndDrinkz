package com.example.microservice3.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "users_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String username;
    String password;
    String firstName;
    String lastName;
    String email;
    // enumeration for role
    String authority;
    @ManyToMany
    @ToString.Exclude
    List<Place> favoritePlaces;

    public User(String username, String password, String firstName, String lastName, String email, String authority) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.favoritePlaces = new ArrayList<>();
        this.authority = authority;
    }
}

