package com.technoboom.model.tasks;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/5/17
 * Time: 1:04 PM
 * Project: ITAcademy
 * Package: com.technoboom.model.tasks
 *
 * Task model
 * Task it's a special exercise for users.
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "tasks")
public class Task {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    private Boolean isPublished;
    private Date createdAt;      // creation date
    private Date updatedAt;      // last updating date
    private Date deletedAt;      // deleting date

    private @Version @JsonIgnore Long version;

    /**
     * Default constructor for Task model
     */
    public Task() {
        this.name = "";
        this.description = "";
    }

    /**
     * Constructor for Task
     * @param name          the name of the task
     * @param description   the public description of the task
     */
    public Task(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
