package mk.foodanddrinkz.backend.service;

import lombok.SneakyThrows;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.repository.PlaceRepository;
import mk.foodanddrinkz.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService {
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;

    public UserServiceImplementation(UserRepository userRepository, PlaceRepository placeRepository) {
        this.userRepository = userRepository;
        this.placeRepository = placeRepository;
    }

    @Override
    public User login(String username, String password) throws UserDoesntExistException {
        return userRepository.findByUsernameAndPassword(username,password).orElseThrow(UserDoesntExistException::new);
    }

    @Override
    public User findById(Long id) throws UserDoesntExistException {
        return userRepository.findById(id).orElseThrow(UserDoesntExistException::new);
    }

    @Override
    public User findByUsername(String username) throws UserDoesntExistException {
        return userRepository.findByUsername(username).orElseThrow(UserDoesntExistException::new);
    }

    @Override
    public void register(String username, String password, String firstName, String lastName, String email) {
        userRepository.save(new User(username, password, firstName, lastName, email, "USER"));
    }

    @SneakyThrows
    @Override
    public User addPlaceToFavorites(Long uId,Long pId) {
        User user = userRepository.findById(uId).orElseThrow(UserDoesntExistException::new);
        userRepository.delete(user);
        List<Place> places = user.getFavoritePlaces();
        places.add(placeRepository.findById(pId).get(0));
        user.setFavoritePlaces(places);
        return userRepository.save(user);
    }
}
