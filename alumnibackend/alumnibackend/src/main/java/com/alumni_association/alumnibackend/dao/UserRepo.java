package com.alumni_association.alumnibackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alumni_association.alumnibackend.model.User;
@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

	User findByEmail(String username);
}
