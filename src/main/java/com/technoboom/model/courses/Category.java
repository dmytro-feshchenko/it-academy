package com.technoboom.model.courses;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/5/17
 * Time: 12:00 PM
 * Project: ITAcademy
 * Package: com.technoboom.model.courses
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    /**
     * Default constructor for Category
     */
    public Category() {
        this.name = "";
        this.description = "";
    }

    /**
     * Constructor for Category
     * @param name          name of the category
     * @param description   public description of the category
     */
    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
