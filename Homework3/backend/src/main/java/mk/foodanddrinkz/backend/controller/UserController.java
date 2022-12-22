package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Returning the information about a user, if the user exists
    @GetMapping("/profile")
    public User getUserInfo(HttpServletRequest request) {
        try {
            // we add the userId in session when he is logged in
            return userService.findById((Long) request.getSession().getAttribute("userId"));
        } catch (UserDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }

    // Returning the favorite places for a user, if the user exists
    @GetMapping("/favorites")
    public List<Place> getFavorites(HttpServletRequest request) {
        try {
            // we add the userId in session when he is logged in
            return userService.findById((Long) request.getSession().getAttribute("userId")).getFavoritePlaces();
        } catch (UserDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
}
