package com.technoboom.model.courses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/4/17
 * Time: 4:13 PM
 * Project: ITAcademy
 * Package: com.technoboom.model
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "lessons")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Date createdAt;
    private Date updatedAt;
    private Date deletedAt;

    private @Version @JsonIgnore Long version;

    /**
     * Default constructor for Lesson
     */
    public Lesson() {
        this.name = "";
        this.description = "";
    }

    /**
     * Constructor for Lesson
     * @param name          Lesson public name
     * @param description   Lesson public description
     */
    public Lesson(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
