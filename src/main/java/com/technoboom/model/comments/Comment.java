package com.technoboom.model.comments;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/5/17
 * Time: 1:01 PM
 * Project: ITAcademy
 * Package: com.technoboom.model.comments
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Data
@Entity
@Table(name = "comments")
public class Comment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String summary;
    private String rating;
}
