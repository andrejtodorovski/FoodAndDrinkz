package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.SneakyThrows;
import mk.foodanddrinkz.backend.dto.RegisterDTO;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.http.ResponseEntity;
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
    public List<RegisterDTO> getUserInfo(HttpServletRequest request) {
        User u = null;
        if(request.getServletContext().getAttribute("user")!=null) {
            u = (User) request.getServletContext().getAttribute("user");
        }
        // we add the userId in session when he is logged in
        System.out.println(u.getUsername());
        RegisterDTO registerDTO = new RegisterDTO(u.getUsername(),u.getPassword(),u.getFirstName(),u.getLastName(),u.getEmail());
        return List.of(registerDTO);
    }
    @SneakyThrows
    @GetMapping("/check")
    public Object hasUser(HttpServletRequest request){
        // System.out.println(request.getServletContext().getAttribute("hasLoggedIn"));
        if(request.getServletContext().getAttribute("hasLoggedIn")!=null){
            // return userService.findById((Long) request.getServletContext().getAttribute("userId"));
            System.out.println("IMA USER");
            return ResponseEntity.ok("200");
        }
        else {
            System.out.println("NEMA USER");
            return ResponseEntity.notFound();
        }
    }
    // Returning the favorite places for a user, if the user exists
    @GetMapping("/favorites")
    public List<Place> getFavorites(HttpServletRequest request) {
        User u = null;
        if(request.getServletContext().getAttribute("user")!=null) {
            u = (User) request.getServletContext().getAttribute("user");
        }
        else{
            return List.of();
        }
        Long uId = u.getId();

        try {
            // we add the userId in session when he is logged in
            return userService.findById(uId).getFavoritePlaces();
        } catch (UserDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
    @GetMapping("/logout")
    public void getLogout(HttpServletRequest request){
        System.out.println("se povikuva");
        request.getServletContext().removeAttribute("hasLoggedIn");
        request.getServletContext().removeAttribute("user");
        request.getServletContext().removeAttribute("username");
    }
}
