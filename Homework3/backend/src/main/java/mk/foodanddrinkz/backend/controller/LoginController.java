package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.dto.LoginDTO;
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
        request.getSession().setAttribute("username",username);
        User u;
        try{
            u=userService.login(username,password);
            request.getSession().setAttribute("username",username);
            request.getSession().setAttribute("user",u);
            request.getSession().setAttribute("hasLoggedIn", true);
            return ResponseEntity.ok("true");
        }
        catch(UserDoesntExistException exception) {
            request.getSession().setAttribute("hasLoggedIn", false);
            return ResponseEntity.notFound();
            // throw new RuntimeException(exception);
        }
    }
}
