package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.dto.LoginDTO;
import mk.foodanddrinkz.backend.dto.RegisterDTO;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")
public class LoginController {
    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }
    // Login user
    @CrossOrigin(origins = "http://localhost:3000/login")
    @PostMapping
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
        catch(UserDoesntExistException exception) {
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
}
