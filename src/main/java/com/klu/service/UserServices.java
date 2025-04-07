package com.klu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.User;
import com.klu.repository.UserRepo;

@Service
public class UserServices{  
 @Autowired
 private UserRepo userRepo;
 
 public String userRegistration(User user) {
  if(userRepo.existsByEmail(user.getEmail())) {
   return "Email already exists";
  }else {
   userRepo.save(user); 
   return "User Registration successfull";
  }
 }
 public boolean loginUser(String email,String password) {
	 Optional<User>userOptional= userRepo.findByEmail(email);
	 return userOptional.map(user -> user.getPassword().equals(password)).orElse(false);
 }

}