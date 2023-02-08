package com.example.microservice1.service;

import com.example.microservice1.model.Place;
import com.example.microservice1.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService {
    private final PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public List<Place> getTopRated() {
        return placeRepository.findAllByOrderByRatingDesc().subList(0,8);
    }

    @Override
    public List<Place> getMostVisited() {
        return placeRepository.findAllByOrderByReviewCountDesc().subList(0,8);
    }

    @Override
    public List<Place> getBars() {
        return placeRepository.findAllByCategoryIgnoreCase("bar");
    }

    @Override
    public List<Place> getRestaurants() {
        return placeRepository.findAllByCategoryIgnoreCase("restaurant");
    }

    @Override
    public List<Place> getCafes() {
        return placeRepository.findAllByCategoryIgnoreCase("cafe");
    }

    @Override
    public Place getById(Long id) {
        return placeRepository.findById(id).stream().findFirst().orElseThrow(RuntimeException::new);
    }
}
