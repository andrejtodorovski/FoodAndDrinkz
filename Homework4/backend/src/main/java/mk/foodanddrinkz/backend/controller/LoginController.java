package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.dto.LoginDTO;
import mk.foodanddrinkz.backend.dto.RegisterDTO;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin()
@RequestMapping("/login")
public class LoginController {
    // Login user
    @CrossOrigin(origins = "http://localhost:3000/login")
    @PostMapping
    public Object loginUser(@RequestBody LoginDTO loginDTO){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<LoginDTO> request =
                new HttpEntity<>(loginDTO, headers);
        return restTemplate.postForObject("http://microservice3:8097/login", request, Object.class);
    }
    // Register user
    @PostMapping("/register")
    public void registerUser(@RequestBody RegisterDTO registerDTO){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<RegisterDTO> request =
                new HttpEntity<>(registerDTO, headers);
        restTemplate.postForObject("http://microservice3:8097/register", request, String.class);
    }
}
