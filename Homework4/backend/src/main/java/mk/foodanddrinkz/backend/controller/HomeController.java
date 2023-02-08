package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.model.Place;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
// implemented using microservice3
@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
    // Returning the top-rated places using microservice1
    @GetMapping("/topRated")
    public ResponseEntity<Place[]> getTopRatedAndMostVisited() {
        return new RestTemplate().getForEntity("http://localhost:8099/topRated", Place[].class);
    }
    // Returning the most-visited places using microservice1
    @GetMapping("/mostVisited")
    public ResponseEntity<Place[]> getMostVisited() {
        return new RestTemplate().getForEntity("http://localhost:8099/mostVisited", Place[].class);
    }
}
