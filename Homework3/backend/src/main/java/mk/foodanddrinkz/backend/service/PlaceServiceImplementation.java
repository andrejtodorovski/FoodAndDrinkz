package mk.foodanddrinkz.backend.service;

import mk.foodanddrinkz.backend.exceptions.PlaceDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public Place save(Place place) {
        return placeRepository.save(place);
    }
    public static float distance(double lat1, double lat2, double lon1, double lon2){
        lon1 = Math.toRadians(lon1);
        lon2 = Math.toRadians(lon2);
        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);

        // Haversine formula
        double dlon = lon2 - lon1;
        double dlat = lat2 - lat1;
        double a = Math.pow(Math.sin(dlat / 2), 2)
                + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(dlon / 2),2);

        double c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        double r = 6371;

        // calculate the result
        return (float) (c * r);
    }
    @Override
    public List<Place> findClosest(Float longitude, Float latitude, Integer radius) {
        return placeRepository.findAll().stream().filter(place -> distance(latitude, place.getLatitude(), longitude, place.getLongitude())<radius).collect(Collectors.toList());
    }
}
