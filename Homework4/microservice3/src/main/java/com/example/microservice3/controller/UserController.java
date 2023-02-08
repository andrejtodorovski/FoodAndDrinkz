package com.example.microservice3.controller;

import com.example.microservice3.model.LoginDTO;
import com.example.microservice3.model.Place;
import com.example.microservice3.model.RegisterDTO;
import com.example.microservice3.model.User;
import com.example.microservice3.repository.PlaceRepository;
import com.example.microservice3.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.SneakyThrows;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/")
public class UserController {
    private final UserService userService;
    private final PlaceRepository placeRepository;

    public UserController(UserService userService,
                          PlaceRepository placeRepository) {
        this.userService = userService;
        this.placeRepository = placeRepository;
    }
    // Login user
    @PostMapping("/login")
    public Object loginUser(@RequestBody LoginDTO loginDTO,
                            HttpServletRequest request){
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        request.getServletContext().setAttribute("username",username);
        User u;
        try{
            u=userService.login(username,password);
            request.getServletContext().setAttribute("username",username);
            request.getServletContext().setAttribute("user",u);
            request.getServletContext().setAttribute("hasLoggedIn", true);
            return ResponseEntity.ok("true");
        }
        catch(RuntimeException exception) {
            request.getServletContext().setAttribute("hasLoggedIn", false);
            return ResponseEntity.notFound();
        }
    }
    // Register user
    @PostMapping("/register")
    public void registerUser(@RequestBody RegisterDTO registerDTO){
        String username = registerDTO.getUsername();
        String password = registerDTO.getPassword();
        String firstName = registerDTO.getFirstName();
        String lastName = registerDTO.getLastName();
        String email = registerDTO.getEmail();
        userService.register(username,password,firstName,lastName,email);
    }
    // Returning the information about a user, if the user exists
    @GetMapping("/profile")
    public List<RegisterDTO> getUserInfo(HttpServletRequest request) {
        User u = null;
        if(request.getServletContext().getAttribute("user")!=null) {
            u = (User) request.getServletContext().getAttribute("user");
        }
        assert u != null;
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
                return ResponseEntity.ok("500");
        }
        else {
            return ResponseEntity.ok("500");
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
        } catch (RuntimeException e) {
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
        if(!userService.findById(uId).getFavoritePlaces().contains(placeRepository.findById(id))){
            User nUser = userService.addPlaceToFavorites(uId,id);
            request.getServletContext().setAttribute("user",nUser);
            request.getServletContext().setAttribute("username",nUser.getUsername());
        }
        return ResponseEntity.ok("");
    }
}
