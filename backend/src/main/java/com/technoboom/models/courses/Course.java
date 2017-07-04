package com.technoboom.models.courses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/4/17
 * Time: 9:36 PM
 * Project: ITAcademy
 * Package: com.technoboom.models
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;         // public name of the course
    private String description;  // public description of the course
    private Byte level;          // complexity level (from 1 to 10)
    private Date createdAt;      // date of course creation
    private Date updatedAt;      // date of course last update
    private Date deletedAt;      // date of placing course to archive

    private @Version @JsonIgnore Long version;

    /**
     * Default constructor for Course
     */
    public Course() {
        this.name = "";
        this.description = "";
        this.level = 1;
    }

    /**
     * Constructor for Course
     * @param name          public name of the course
     * @param description   public description of the course
     * @param level         complexity level (from 1 to 10)
     */
    public Course(String name, String description, Byte level) {
        this.name = name;
        this.description = description;
        this.level = level;
    }
}
