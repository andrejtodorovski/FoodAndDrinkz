package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin
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
    @GetMapping
    public List<Place> getTopRatedAndMostVisited(){
        List<Place> tmp1 = placeService.getTopRated();
        List<Place> tmp2 = placeService.getMostVisited();
        tmp1.addAll(tmp2);
        return tmp1;
    }
}
