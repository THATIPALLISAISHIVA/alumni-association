package com.alumni_association.alumnibackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "alumni_user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;
	private String name;
	@Column(unique = true, nullable = false)
	private String email;
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
	@Column(name = "created_at")
	private LocalDateTime createdAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = LocalDateTime.now();
	}

	public enum Role {
		STUDENT,
		ALUMNI,
		ADMIN
	}


}
