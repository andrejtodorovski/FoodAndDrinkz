package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.dto.LoginDTO;
import mk.foodanddrinkz.backend.dto.RegisterDTO;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//Copied from webLab
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")
public class LoginController {
    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }
    @CrossOrigin(origins = "http://localhost:3000/login")
    @PostMapping
    public Object loginUser(@RequestBody LoginDTO loginDTO,
                            HttpServletRequest request){
        String username = loginDTO.getUsername();
        String password = loginDTO.getPassword();
        System.out.println(username);
        System.out.println(password);
        request.getServletContext().setAttribute("username",username);
        User u;
        try{
            u=userService.login(username,password);
            request.getServletContext().setAttribute("username",username);
            request.getServletContext().setAttribute("user",u);
            request.getServletContext().setAttribute("hasLoggedIn", true);
            System.out.println(request.getServletContext().getAttribute("hasLoggedIn"));
            return ResponseEntity.ok("true");
        }
        catch(UserDoesntExistException exception) {
            request.getServletContext().setAttribute("hasLoggedIn", false);
            System.out.println(request.getServletContext().getAttribute("hasLoggedIn"));
            return ResponseEntity.notFound();
            // throw new RuntimeException(exception);
        }
    }
    @PostMapping("/register")
    public void registerUser(@RequestBody RegisterDTO registerDTO, HttpServletRequest request){
        String username = registerDTO.getUsername();
        String password = registerDTO.getPassword();
        String firstName = registerDTO.getFirstName();
        String lastName = registerDTO.getLastName();
        String email = registerDTO.getEmail();
        System.out.println(username);
        System.out.println(password);
        System.out.println(firstName);
        System.out.println(lastName);
        System.out.println(email);
        userService.register(username,password,firstName,lastName,email);
    }
}
