package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.dto.SearchDTO;
import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.service.PlaceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

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
    public void closestPlaces(@RequestBody SearchDTO searchDTO, HttpServletRequest request) {
        String longitude = searchDTO.getLongitude();
        String latitude = searchDTO.getLatitude();
        Integer radius = searchDTO.getRadius();
        String category = searchDTO.getCategory();
        if(Objects.equals(category, "")){
            category="Bar";
        }
        System.out.println(longitude + "," + latitude + " and radius : " + radius + " in category : " + category);
        request.getServletContext().setAttribute("longitude", longitude);
        request.getServletContext().setAttribute("latitude", latitude);
        request.getServletContext().setAttribute("radius", radius);
        request.getServletContext().setAttribute("category", category);
    }

    @GetMapping("/closest")
    public List<Place> getClosestPlaces(HttpServletRequest request) {
        Float longitude = Float.valueOf((String) request.getServletContext().getAttribute("longitude"));
        Float latitude = Float.valueOf((String) request.getServletContext().getAttribute("latitude"));
        Integer radius = (Integer) request.getServletContext().getAttribute("radius");
        String category = (String) request.getServletContext().getAttribute("category");
        System.out.println(longitude + latitude + radius);
        return placeService.findClosest(longitude, latitude, radius, category);
    }

    // make DTO classes for the parameters
    // first method maybe needs to return List<String>
    @GetMapping("/testing")
    public String[] bl(@RequestParam String category){
        return placeService.getAttributesForCategory(category).toArray(new String[0]);
    }
    @GetMapping("/test")
    public List<Place> b(String attribute,String category){
        return placeService.getByAttributeAndCategory(attribute,category);
    }
}