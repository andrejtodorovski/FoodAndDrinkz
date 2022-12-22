//package mk.foodanddrinkz.backend.controller;
//
//import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
//import mk.foodanddrinkz.backend.model.Place;
//import mk.foodanddrinkz.backend.service.PlaceService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping ("/bar")
//public class BarController {
//    private final PlaceService placeService;
//
//    public BarController(PlaceService placeService) {
//        this.placeService = placeService;
//    }
//    // Returning all bars
//    @GetMapping("")
//    public List<Place> getBars(){
//        return placeService.getBars();
//    }
//    // Returning a bar based on his id, if the bar exists
//    @GetMapping("/{id}")
//    public Place getPlaceById(@PathVariable Long id){
//        try {
//            return placeService.getById(id);
//        } catch (PlaceDoesntExistException e) {
//            throw new RuntimeException(e);
//        }
//    }
//}
