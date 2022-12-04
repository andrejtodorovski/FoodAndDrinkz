package mk.foodanddrinkz.backend.service;

import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService {
    private final UserRepository userRepository;

    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User login(String username, String password) throws UserDoesntExistException {
        return userRepository.findByUsernameAndPassword(username,password).orElseThrow(UserDoesntExistException::new);
    }

    @Override
    public User findById(Long id) throws UserDoesntExistException {
        return userRepository.findById(id).orElseThrow(UserDoesntExistException::new);
    }
}
