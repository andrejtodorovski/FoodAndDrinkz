package mk.foodanddrinkz.backend.service;

import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;

import java.util.List;

public interface PlaceService {
    List<Place> getAll();
    List<Place> getTopRated();
    List<Place> getMostVisited();
    List<Place> getBars();
    List<Place> getRestaurants();
    List<Place> getCafes();
    Place getById(Long id) throws PlaceDoesntExistException;
    void save(Place place);
    List<Place> findClosest(Float longitude, Float latitude, Integer radius, String category);
    List<String> getAttributesForCategory(String category);
    List<Place> findByCategory(String category);
}
