package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    private final PlaceService placeService;

    public RestaurantController(PlaceService placeService) {
        this.placeService = placeService;
    }
    // Returning all restaurants
    @GetMapping("")
    public List<Place> getRestaurants(){
        return placeService.getRestaurants();
    }
    // Returning a restaurant based on his id, if the restaurant exists
    @GetMapping("/{id}")
    public Place getPlaceById(@PathVariable Long id){
        try {
            return placeService.getById(id);
        } catch (PlaceDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
}

