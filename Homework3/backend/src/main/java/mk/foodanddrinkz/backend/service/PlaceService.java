package mk.foodanddrinkz.backend.service;

import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;

import java.util.List;

public interface PlaceService {
    public List<Place> getAll();
    public List<Place> getTopRated();
    public List<Place> getMostVisited();
    public List<Place> getBars();
    public List<Place> getRestaurants();
    public List<Place> getCafes();
    public Place getById(Long id) throws PlaceDoesntExistException;
    public Place save(Place place);
    List<Place> findClosest(Float longitude, Float latitude, Integer radius);
}
