package com.klu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.User;
import com.klu.service.UserServices;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
 @Autowired
 private UserServices userService;
 
 @PostMapping("/register")
 public String userRegister(@RequestBody User user) {
  return userService.userRegistration(user);
 }
 @PostMapping("/login")
 public String loginUser(@RequestBody User user) {
	 boolean isAuthenticated =userService.loginUser(user.getEmail(),user.getPassword());
  return isAuthenticated ? "login sucessfull" : "invalid credentials"; 
 }

} 