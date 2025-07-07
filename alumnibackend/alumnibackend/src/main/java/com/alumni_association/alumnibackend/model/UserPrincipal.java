package com.alumni_association.alumnibackend.model;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {

	private static final long serialVersionUID = 1L;

	private final User user;

	public UserPrincipal(User user) {
		this.user = user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// Use role from the User model
		return Collections.singleton(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()));
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// Return email as the username (for authentication)
		return user.getEmail();
	}


	@Override
	public boolean isCredentialsNonExpired() {
		return true; // Can add password expiry logic if needed
	}


	public String getEmail() {
		return user.getEmail(); // Helpful for including in JWT body
	}

	public User getUser() {
		return user;
	}
}
