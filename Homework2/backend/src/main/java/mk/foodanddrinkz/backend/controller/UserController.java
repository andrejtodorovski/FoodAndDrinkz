package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public User getUserInfo(@PathVariable Long id){
        try {
            return userService.findById(id);
        } catch (UserDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
}
