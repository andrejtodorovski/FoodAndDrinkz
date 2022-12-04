package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.bootstrap.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping ("/bar")
public class BarController {
    private final PlaceService placeService;

    public BarController(PlaceService placeService) {
        this.placeService = placeService;
    }
    @GetMapping("")
    public List<Place> getBars(){
        return placeService.getBars();
    }
    @GetMapping("/{id}")
    public Place getPlaceById(@PathVariable Long id){
        try {
            return placeService.getById(id);
        } catch (PlaceDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
}
