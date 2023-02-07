package com.example.microservice2.controller;

import com.example.microservice2.model.CategoryDTO;
import com.example.microservice2.model.Place;
import com.example.microservice2.model.SearchDTO;
import com.example.microservice2.service.PlaceService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class PlaceController {
    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }
    @PostMapping("/closest")
    public void closestPlaces(@RequestBody SearchDTO searchDTO, HttpServletRequest request) {
        String longitude = searchDTO.getLongitude();
        String latitude = searchDTO.getLatitude();
        Integer radius = searchDTO.getRadius();
        String category = searchDTO.getCategory();
        if (Objects.equals(category, "")) {
            category = "Bar";
        }
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
        return placeService.findClosest(longitude, latitude, radius, category);
    }
    @GetMapping("/category/bar")
    public String[] returnAttributesForBar() {
        return placeService.getAttributesForCategory("bar").toArray(new String[0]);
    }
    // Cafes attributes
    @GetMapping("/category/cafe")
    public String[] returnAttributesForCafe() {
        return placeService.getAttributesForCategory("cafe").toArray(new String[0]);
    }
    // Restaurants attributes
    @GetMapping("/category/restaurant")
    public String[] returnAttributesForRestaurant() {
        return placeService.getAttributesForCategory("restaurant").toArray(new String[0]);
    }
    @PostMapping("/attributeAll")
    public List<Place> getByAttributeForAll(@RequestBody CategoryDTO categoryDTO) {
        if (categoryDTO.getAttribute().equals("default")) {
            return placeService.findByCategory(categoryDTO.getCategory());
        }
        return placeService.findByCategory(categoryDTO.getCategory()).stream().filter(p -> p.getAttributes().contains(categoryDTO.getAttribute())).collect(Collectors.toList());
    }
    @PostMapping("/attribute")
    public List<Place> getByAttribute(@RequestBody CategoryDTO categoryDTO, HttpServletRequest request) {
        Float longitude = Float.valueOf((String) request.getServletContext().getAttribute("longitude"));
        Float latitude = Float.valueOf((String) request.getServletContext().getAttribute("latitude"));
        Integer radius = (Integer) request.getServletContext().getAttribute("radius");
        String category = (String) request.getServletContext().getAttribute("category");
        if (categoryDTO.getAttribute().equals("default")) {
            return placeService.findClosest(longitude, latitude, radius, category);
        }
        return placeService.findClosest(longitude, latitude, radius, category).stream().filter(p -> p.getAttributes().contains(categoryDTO.getAttribute())).collect(Collectors.toList());
    }
    @PostMapping("/new/add")
    public void addPlace(@RequestBody Place place) {
        // ERROR: duplicate key value violates unique constraint
        System.out.println(placeService.getAll().size());
        int id = placeService.getAll().size() + 1;
        place.setId((long) id);
        System.out.println(place);
        placeService.save(place);
    }
}
