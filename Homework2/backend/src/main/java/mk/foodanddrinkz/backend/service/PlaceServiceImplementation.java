package mk.foodanddrinkz.backend.service;

import mk.foodanddrinkz.backend.bootstrap.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaceServiceImplementation implements PlaceService {
    private final PlaceRepository placeRepository;

    public PlaceServiceImplementation(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public List<Place> getAll() {
        return placeRepository.findAll();
    }

    @Override
    public List<Place> getTopRated() {
        return placeRepository.findAllByOrderByRatingDesc().subList(0,5);
    }

    @Override
    public List<Place> getMostVisited() {
        return placeRepository.findAllByOrderByReviewCountDesc().subList(0,5);
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
    public Place getById(Long id) throws PlaceDoesntExistException {
        return placeRepository.findById(id).stream().findFirst().orElseThrow(PlaceDoesntExistException::new);
    }
}
