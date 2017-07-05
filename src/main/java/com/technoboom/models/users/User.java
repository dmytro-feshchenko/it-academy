package com.technoboom.models.users;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

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
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;    // username for login
    private String password;    // hash of password
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
}
