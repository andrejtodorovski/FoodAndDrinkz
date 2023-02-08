package com.example.microservice3.service;

import com.example.microservice3.model.User;

public interface UserService {
    User login(String username, String password);
    User findById(Long id);
    void register(String username, String password, String firstName, String lastName, String email);
    User addPlaceToFavorites(Long uId,Long pId);
}
