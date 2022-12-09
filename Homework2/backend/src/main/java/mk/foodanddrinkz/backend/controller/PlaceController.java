package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/place")
public class PlaceController {
    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping("/bars")
    public List<Place> getBars() {
        return placeService.getBars();
    }

    @GetMapping("/restaurants")
    public List<Place> getRestaurants() {
        return placeService.getRestaurants();
    }

    @GetMapping("/cafes")
    public List<Place> getCafes() {
        return placeService.getCafes();
    }

    // Returning a bar based on his id, if the bar exists
    @GetMapping("/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable Long id) {
        Place place;
        try {
            place = placeService.getById(id);
        } catch (PlaceDoesntExistException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(place);
    }

    @PostMapping("/add")
    public Place addPlace(@RequestBody Place place) {
        // ERROR: duplicate key value violates unique constraint
        System.out.println(place);
        //return placeService.save(place);
        return null;
    }
    @PostMapping("/closest")
    public void closestPlaces(@RequestBody String location, HttpServletRequest request){
        location = location.substring(1,location.length()-1);
        Float longitude = Float.valueOf(location.split(",")[0].split(":")[1]);
        Float latitude = Float.valueOf(location.split(",")[1].split(":")[1]);
        String tmp = (location.split(",")[2].split(":")[1]);
        Integer radius = Integer.valueOf(tmp.substring(1,tmp.length()-1));
        System.out.println(location);
        System.out.println(longitude + "," + latitude + " and r:" + radius);
        System.out.println(placeService.findClosest(longitude,latitude,radius));
        request.getServletContext().setAttribute("longitude",longitude);
        request.getServletContext().setAttribute("latitude", latitude);
        request.getServletContext().setAttribute("radius",radius);
    }
    @GetMapping("/closest")
    public List<Place> getClosestPlaces(HttpServletRequest request){
        Float longitude = (Float) request.getServletContext().getAttribute("longitude");
        Float latitude = (Float) request.getServletContext().getAttribute("latitude");
        Integer radius = (Integer) request.getServletContext().getAttribute("radius");
        System.out.println(longitude+latitude+radius);
        return placeService.findClosest(longitude,latitude,radius);
    }
}
