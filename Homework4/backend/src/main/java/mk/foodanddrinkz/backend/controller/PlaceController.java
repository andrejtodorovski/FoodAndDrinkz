package mk.foodanddrinkz.backend.controller;

import mk.foodanddrinkz.backend.dto.CategoryDTO;
import mk.foodanddrinkz.backend.dto.SearchDTO;
import mk.foodanddrinkz.backend.model.Place;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@CrossOrigin()
@RestController
@RequestMapping("/place")
public class PlaceController {
    // Returning list of all Bars using microservice1
    @GetMapping("/bars")
    public ResponseEntity<Place[]> getBars() {
        return new RestTemplate().getForEntity("http://microservice1:8099/bars", Place[].class);
    }
    // Returning list of all Restaurants using microservice1
    @GetMapping("/restaurants")
    public ResponseEntity<Place[]> getRestaurants() {
        return new RestTemplate().getForEntity("http://microservice1:8099/restaurants", Place[].class);
    }
    // Returning list of all Cafés using microservice1
    @GetMapping("/cafes")
    public ResponseEntity<Place[]> getCafes() {
        return new RestTemplate().getForEntity("http://microservice1:8099/cafes", Place[].class);
    }
    // Returning a place based on his id, if the place exists, using microservice1
    @GetMapping("/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable Long id) {
        Map<String, Long>  uriVariables=new HashMap<>();
        uriVariables.put("id", id);
        return new RestTemplate().getForEntity("http://microservice1:8099/{id}", Place.class, uriVariables);
    }
    // the following functions are implemented using microservice2
    // Add a new place
    @PostMapping("/new/add")
    public void addPlace(@RequestBody Place place) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Place> request =
                new HttpEntity<>(place, headers);
        restTemplate.postForObject("http://microservice2:8098/new/add", request, String.class);

    }
    // Search the closest places in radius
    @PostMapping("/closest")
    public void closestPlaces(@RequestBody SearchDTO searchDTO) {
        String category = searchDTO.getCategory();
        if (Objects.equals(category, "")) {
            searchDTO.setCategory("Bar");
        }
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<SearchDTO> request =
                new HttpEntity<>(searchDTO, headers);
        restTemplate.postForObject("http://microservice2:8098/closest", request, String.class);
    }
    //  Get user location
    @GetMapping("/closest")
    public ResponseEntity<Place[]> getClosestPlaces() {
        return new RestTemplate().getForEntity("http://microservice2:8098/closest", Place[].class);
    }
    // Bars attributes
    @GetMapping("/category/bar")
    public ResponseEntity<String[]> returnAttributesForBar() {
        return new RestTemplate().getForEntity("http://microservice2:8098/category/bar", String[].class);
    }
    // Cafes attributes
    @GetMapping("/category/cafe")
    public ResponseEntity<String[]> returnAttributesForCafe() {
        return new RestTemplate().getForEntity("http://microservice2:8098/category/cafe", String[].class);
    }
    // Restaurants attributes
    @GetMapping("/category/restaurant")
    public ResponseEntity<String[]> returnAttributesForRestaurant() {
        return new RestTemplate().getForEntity("http://microservice2:8098/category/restaurant", String[].class);
    }
    // Find the closest places by attribute
    @PostMapping("/attribute")
    public Place[] getByAttribute(@RequestBody CategoryDTO categoryDTO) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<CategoryDTO> request =
                new HttpEntity<>(categoryDTO, headers);
        return restTemplate.postForObject("http://microservice2:8098/attribute", request, Place[].class);
    }
    // Find all by attribute
    @PostMapping("/attributeAll")
    public Place[] getByAttributeForAll(@RequestBody CategoryDTO categoryDTO) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<CategoryDTO> request =
                new HttpEntity<>(categoryDTO, headers);
        return restTemplate.postForObject("http://microservice2:8098/attributeAll", request, Place[].class);
    }
}