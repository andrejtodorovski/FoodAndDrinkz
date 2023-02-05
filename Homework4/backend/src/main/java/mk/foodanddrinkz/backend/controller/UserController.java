package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.SneakyThrows;
import mk.foodanddrinkz.backend.dto.RegisterDTO;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.Place;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.PlaceService;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;
    private final PlaceService placeService;

    public UserController(UserService userService, PlaceService placeService) {
        this.userService = userService;
        this.placeService = placeService;
    }

    // Returning the information about a user, if the user exists
    @GetMapping("/profile")
    public List<RegisterDTO> getUserInfo(HttpServletRequest request) {
        User u = null;
        if(request.getServletContext().getAttribute("user")!=null) {
            u = (User) request.getServletContext().getAttribute("user");
        }
        assert u != null;
        System.out.println(u.getUsername());
        RegisterDTO registerDTO = new RegisterDTO(u.getUsername(),u.getPassword(),u.getFirstName(),u.getLastName(),u.getEmail());
        return List.of(registerDTO);
    }
    // Returning whether the user is logged in or not
    @SneakyThrows
    @GetMapping("/check")
    public Object hasUser(HttpServletRequest request){
        if(request.getServletContext().getAttribute("hasLoggedIn")!=null){
            if((boolean) request.getServletContext().getAttribute("hasLoggedIn"))
                return ResponseEntity.ok("200");
            else
                return ResponseEntity.notFound();
        }
        else {
            return ResponseEntity.notFound();
        }
    }
    // Returning the role of the user
    @SneakyThrows
    @GetMapping("/getadmin")
    public String isUserAdmin(HttpServletRequest request){
        if(request.getServletContext().getAttribute("hasLoggedIn")!=null) {
            if ((boolean) request.getServletContext().getAttribute("hasLoggedIn")) {
                User u = (User) request.getServletContext().getAttribute("user");
                if (Objects.equals(u.getAuthority(), "ADMIN")) {
                    return "admin";
                } else {
                    return "user";
                }
            }
            else
                return "error";
        }
        else {
            return "error";
        }
    }
    // Returning the favorite places for a user, if the user exists
    @GetMapping("/favorites")
    public List<Place> getFavorites(HttpServletRequest request) {
        User u;
        if(request.getServletContext().getAttribute("user")!=null) {
            u = (User) request.getServletContext().getAttribute("user");
        }
        else{
            return List.of();
        }
        Long uId = u.getId();

        try {
            System.out.println(userService.findById(uId).getFavoritePlaces().toString());
            return userService.findById(uId).getFavoritePlaces();
        } catch (UserDoesntExistException e) {
            throw new RuntimeException(e);
        }
    }
    // Log out method
    @GetMapping("/logout")
    public void getLogout(HttpServletRequest request){
        request.getServletContext().removeAttribute("hasLoggedIn");
        request.getServletContext().removeAttribute("user");
        request.getServletContext().removeAttribute("username");
    }
    // Add place to favorites
    @SneakyThrows
    @GetMapping("/{id}")
    public ResponseEntity<String> addToFavorites(@PathVariable Long id, HttpServletRequest request) {
        User u = (User) request.getServletContext().getAttribute("user");
        Long uId = u.getId();
        System.out.println(userService.findById(uId).getFavoritePlaces().toString());
        if(!userService.findById(uId).getFavoritePlaces().contains(placeService.getById(id))){
            User nUser = userService.addPlaceToFavorites(uId,id);
            request.getServletContext().setAttribute("user",nUser);
            request.getServletContext().setAttribute("username",nUser.getUsername());
        }
        return ResponseEntity.ok("");
    }
}
