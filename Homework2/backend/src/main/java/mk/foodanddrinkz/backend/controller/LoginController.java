package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    @PostMapping
    public void loginUser(@RequestBody String credentials,
                            HttpServletRequest request){
        credentials = credentials.substring(1,credentials.length()-1);
        String username = credentials.split(",")[0].split(":")[1];
        String password = credentials.split(",")[1].split(":")[1];
        username = username.substring(1,username.length()-1);
        password = password.substring(1,password.length()-1);
        System.out.println(username);
        System.out.println(password);
        User u;
        try{
            u=userService.login(username,password);
            request.getSession().setAttribute("username",username);
            request.getSession().setAttribute("user",u);
        }
        catch(UserDoesntExistException exception) {
            throw new RuntimeException(exception);
        }
    }
}
