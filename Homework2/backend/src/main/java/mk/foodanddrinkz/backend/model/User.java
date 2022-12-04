package mk.foodanddrinkz.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String username;
    String password;
    @ManyToMany
    List<Place> favoritePlaces;
}
