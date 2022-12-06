package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
    private final PlaceService placeService;

    public HomeController(PlaceService placeService) {
        this.placeService = placeService;
    }

    // testing
//    @PostMapping("/show")
//    public String coordinates(@RequestBody String l){
//        System.out.println(l);
//        return "";
//    }
    // Returning the top-rated places
    @GetMapping("/topRated")
    public List<Place> getTopRatedAndMostVisited(){
        return placeService.getTopRated();
    }
    // Returning the most-visited places
    @GetMapping("/mostVisited")
    public List<Place> getMostVisited(){
        return placeService.getMostVisited();
    }
}
