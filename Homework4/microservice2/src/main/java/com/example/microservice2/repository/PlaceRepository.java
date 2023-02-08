package com.example.microservice2.repository;

import com.example.microservice2.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlaceRepository extends JpaRepository<Place, Integer> {
    List<Place> findAllByCategoryIgnoreCase(String category);
}