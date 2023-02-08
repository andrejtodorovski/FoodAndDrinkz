package com.example.microservice1.service;

import com.example.microservice1.model.Place;

import java.util.List;

public interface PlaceService {
    List<Place> getTopRated();
    List<Place> getMostVisited();
    List<Place> getBars();
    List<Place> getRestaurants();
    List<Place> getCafes();
    Place getById(Long id);

}
