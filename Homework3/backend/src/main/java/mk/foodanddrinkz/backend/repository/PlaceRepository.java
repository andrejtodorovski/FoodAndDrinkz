package mk.foodanddrinkz.backend.repository;

import mk.foodanddrinkz.backend.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Integer> {
    List<Place> findById(Long id);
    List<Place> findAllByCategoryIgnoreCase(String category);
    List<Place> findAllByOrderByRatingDesc();
    List<Place> findAllByOrderByReviewCountDesc();
}
