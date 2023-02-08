package com.example.microservice2.service;

import com.example.microservice2.model.Place;

import java.util.List;

public interface PlaceService {
    List<Place> getAll();
    void save(Place place);
    List<Place> findClosest(Float longitude, Float latitude, Integer radius, String category);
    List<String> getAttributesForCategory(String category);
    List<Place> findByCategory(String category);
}
