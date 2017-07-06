package com.technoboom.models.comments;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/6/17
 * Time: 5:18 PM
 * Project: ITAcademy
 * Package: com.technoboom.models.comments
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface CommentRepository extends CrudRepository<Comment, Long> {
}
