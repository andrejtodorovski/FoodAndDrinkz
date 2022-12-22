package mk.foodanddrinkz.backend.model;

import jakarta.persistence.*;

import java.util.ArrayList;
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

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        favoritePlaces = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Place> getFavoritePlaces() {
        return favoritePlaces;
    }

    public void setFavoritePlaces(List<Place> favoritePlaces) {
        this.favoritePlaces = favoritePlaces;
    }
}
