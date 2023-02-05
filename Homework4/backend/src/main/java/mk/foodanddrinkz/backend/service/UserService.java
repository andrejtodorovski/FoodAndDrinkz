package mk.foodanddrinkz.backend.service;

import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;

public interface UserService {
    User login(String username, String password) throws UserDoesntExistException;
    User findById(Long id) throws UserDoesntExistException;
    User findByUsername(String username) throws UserDoesntExistException;
    void register(String username, String password, String firstName, String lastName, String email);
    User addPlaceToFavorites(Long uId,Long pId);
}
