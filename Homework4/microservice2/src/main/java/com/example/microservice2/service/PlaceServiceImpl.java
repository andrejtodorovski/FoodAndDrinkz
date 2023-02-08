package com.example.microservice2.service;

import com.example.microservice2.model.Place;
import com.example.microservice2.repository.PlaceRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlaceServiceImpl implements PlaceService {
    private final PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public List<Place> getAll() {
        return placeRepository.findAll();
    }

    @Override
    public void save(Place place) {
        placeRepository.save(place);
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
    public List<Place> findClosest(Float longitude, Float latitude, Integer radius, String category) {
        return placeRepository.findAllByCategoryIgnoreCase(category).stream().filter(place -> distance(latitude, place.getLatitude(), longitude, place.getLongitude())<radius).collect(Collectors.toList());
    }

    @Override
    public List<String> getAttributesForCategory(String category) {
        HashSet<String> stringHashSet = new HashSet<>();
        for (Place pl: placeRepository.findAllByCategoryIgnoreCase(category)
        ) {
            stringHashSet.addAll(Arrays.asList(pl.getA()));
        }
        return new ArrayList<>(stringHashSet);
    }

    @Override
    public List<Place> findByCategory(String category) {
        return placeRepository.findAllByCategoryIgnoreCase(category);
    }
}

