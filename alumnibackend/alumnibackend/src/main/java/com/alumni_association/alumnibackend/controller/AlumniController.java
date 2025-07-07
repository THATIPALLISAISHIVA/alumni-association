package com.alumni_association.alumnibackend.controller;

import com.alumni_association.alumnibackend.model.User;
import com.alumni_association.alumnibackend.model.UserPrincipal;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/alumni/")
public class AlumniController {

    @GetMapping("register")
    public ResponseEntity<Object> register() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return buildErrorResponse("User is not authenticated. Please login and try again.", HttpStatus.UNAUTHORIZED);
        }

        Object principal = authentication.getPrincipal();

        if (!(principal instanceof UserPrincipal)) {
            return buildErrorResponse("Invalid user principal. Please check token structure.", HttpStatus.UNAUTHORIZED);
        }

        UserPrincipal userPrincipal = (UserPrincipal) principal;
        User user = userPrincipal.getUser();

        if (user.getRole() != User.Role.ALUMNI) {
            return buildErrorResponse("Access Denied: You must be an ALUMNI to access this endpoint. Your current role is: " + user.getRole(), HttpStatus.FORBIDDEN);
        }

        Map<String, Object> successResponse = new HashMap<>();
        successResponse.put("message", "Welcome, ALUMNI!");
        successResponse.put("email", user.getEmail());
        successResponse.put("name", user.getName());

        return new ResponseEntity<>(successResponse, HttpStatus.OK);
    }

    private ResponseEntity<Object> buildErrorResponse(String message, HttpStatus status) {
        Map<String, Object> errorBody = new HashMap<>();
        errorBody.put("error", true);
        errorBody.put("message", message);
        errorBody.put("status", status.value());
        return new ResponseEntity<>(errorBody, status);
    }
}
