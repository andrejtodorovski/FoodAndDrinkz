package com.example.microservice3.service;

import com.example.microservice3.model.Place;
import com.example.microservice3.model.User;
import com.example.microservice3.repository.PlaceRepository;
import com.example.microservice3.repository.UserRepository;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;

    public UserServiceImpl(UserRepository userRepository, PlaceRepository placeRepository) {
        this.userRepository = userRepository;
        this.placeRepository = placeRepository;
    }

    @Override
    public User login(String username, String password) {
        return userRepository.findByUsernameAndPassword(username,password).orElseThrow(RuntimeException::new);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public void register(String username, String password, String firstName, String lastName, String email) {
        userRepository.save(new User(username, password, firstName, lastName, email, "USER"));
    }

    @SneakyThrows
    @Override
    public User addPlaceToFavorites(Long uId,Long pId) {
        User user = userRepository.findById(uId).orElseThrow(RuntimeException::new);
        userRepository.delete(user);
        List<Place> places = user.getFavoritePlaces();
        places.add(placeRepository.findById(pId).get(0));
        user.setFavoritePlaces(places);
        return userRepository.save(user);
    }
}

