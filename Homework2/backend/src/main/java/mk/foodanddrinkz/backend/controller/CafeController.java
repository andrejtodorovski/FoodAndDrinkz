package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cafe")
public class CafeController {
    private final PlaceService placeService;

    public CafeController(PlaceService placeService) {
        this.placeService = placeService;
    }
    // Returning all cafes
    @GetMapping("")
    public List<Place> getCafes(){
        return placeService.getCafes();
    }
    // Returning a cafe based on his id, if the cafe exists
    @GetMapping("/{id}")
    public Place getPlaceById(@PathVariable Long id){
        try {
            return placeService.getById(id);
        } catch (PlaceDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
}

