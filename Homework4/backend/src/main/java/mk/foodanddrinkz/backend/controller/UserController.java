package mk.foodanddrinkz.backend.controller;

import lombok.SneakyThrows;
import mk.foodanddrinkz.backend.dto.RegisterDTO;
import mk.foodanddrinkz.backend.model.Place;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
// implemented using microservice3
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    // Returning the information about a user, if the user exists
    @GetMapping("/profile")
    public ResponseEntity<RegisterDTO[]> getUserInfo() {
        return new RestTemplate().getForEntity("http://localhost:8097/profile", RegisterDTO[].class);
    }
    // Returning whether the user is logged in or not
    @SneakyThrows
    @GetMapping("/check")
    public Object hasUser(){
        return new RestTemplate().getForEntity("http://localhost:8097/check", Object.class);
    }
    // Returning the role of the user
    @SneakyThrows
    @GetMapping("/getadmin")
    public ResponseEntity<String> isUserAdmin(){
        return new RestTemplate().getForEntity("http://localhost:8097/getadmin", String.class);

    }
    // Returning the favorite places for a user, if the user exists
    @GetMapping("/favorites")
    public ResponseEntity<Place[]> getFavorites() {
        return new RestTemplate().getForEntity("http://localhost:8097/favorites", Place[].class);
    }
    // Log out method
    @GetMapping("/logout")
    public void getLogout(){
        new RestTemplate().getForEntity("http://localhost:8097/logout",String.class);
    }
    // Add place to favorites
    @SneakyThrows
    @GetMapping("/{id}")
    public ResponseEntity<String> addToFavorites(@PathVariable Long id) {
        Map<String, Long> uriVariables=new HashMap<>();
        uriVariables.put("id", id);
        return new RestTemplate().getForEntity("http://localhost:8097/{id}",String.class,uriVariables);
    }
}
