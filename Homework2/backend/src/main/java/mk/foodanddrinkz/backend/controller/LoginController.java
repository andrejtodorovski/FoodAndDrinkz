package mk.foodanddrinkz.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import mk.foodanddrinkz.backend.exceptions.UserDoesntExistException;
import mk.foodanddrinkz.backend.model.User;
import mk.foodanddrinkz.backend.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

// Copied from webLab
//@Controller
//@RequestMapping("/login")
//public class LoginController {
//    private final UserService userService;
//
//    public LoginController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @GetMapping
//    public String showLoginPage(){
//        return "login";
//    }
//    @PostMapping
//    public String loginUser(@RequestParam String username,
//                            @RequestParam String password,
//                            Model model , HttpServletRequest request){
//        User u;
//        try{
//            u=userService.login(username,password);
//            request.getSession().setAttribute("username",username);
//            request.getSession().setAttribute("user",u);
//            return "redirect:/home";
//        }
//        catch(UserDoesntExistException exception){
//            model.addAttribute("hasError", true);
//            model.addAttribute("error", exception.getMessage());
//            return "login";
//        }
//    }
//}
