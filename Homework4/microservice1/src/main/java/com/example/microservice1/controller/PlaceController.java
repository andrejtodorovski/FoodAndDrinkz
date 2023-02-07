package com.example.microservice1.controller;

import com.example.microservice1.model.Place;
import com.example.microservice1.service.PlaceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class PlaceController {
    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable Long id) {
        Place place;
        try {
            place = placeService.getById(id);
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(place);
    }
    // Returning the top-rated places
    @GetMapping("/topRated")
    public List<Place> getTopRatedAndMostVisited() {
        return placeService.getTopRated();
    }

    // Returning the most-visited places
    @GetMapping("/mostVisited")
    public List<Place> getMostVisited() {
        return placeService.getMostVisited();
    }
    // Returning list of all Bars
    @GetMapping("/bars")
    public List<Place> getBars() {
        return placeService.getBars();
    }
    // Returning list of all Restaurants
    @GetMapping("/restaurants")
    public List<Place> getRestaurants() {
        return placeService.getRestaurants();
    }
    // Returning list of all Cafes
    @GetMapping("/cafes")
    public List<Place> getCafes() {
        return placeService.getCafes();
    }
}
