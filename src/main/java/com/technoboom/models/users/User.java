package com.technoboom.models.users;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/4/17
 * Time: 9:49 PM
 * Project: ITAcademy
 * Package: com.technoboom.models.users
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@ToString(exclude = "password")
@Entity
@Table(name = "users")
public class User {
    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;    // username for login
    private @JsonIgnore String password;    // hash of password
    private String email;       // user's email
    private String firstName;   // first name of the user
    private String lastName;    // last name of the user
    private String location;    // city, country, state
    private String position;    // job position
    private Date birthday;      // birthday date

    private @Version @JsonIgnore Long version;

    /**
     * Default constructor for User
     */
    public User() {
        this.username = "";
        this.password = "";
        this.email = "";
        this.firstName = "";
        this.lastName = "";
    }

    /**
     * Constructor for User
     * @param username   username for authentication
     * @param password   secret password for authentication
     * @param email      personal email address
     */
    public User(String username, String password, String email) {
        this.username = username;
        this.setPassword(password);
        this.email = email;
    }

    /**
     * Setter for password field
     * Encodes the given password with PASSWORD_ENCODER and fills the
     * password field
     * @param password secret password for authentication
     */
    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }
}
