package mk.foodanddrinkz.backend.repository;

import mk.foodanddrinkz.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsernameAndPassword(String username, String password);

    void delete(User entity);
}
