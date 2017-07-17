package com.technoboom.repository.courses;

import com.technoboom.model.courses.Lesson;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/6/17
 * Time: 5:21 PM
 * Project: ITAcademy
 * Package: com.technoboom.model.courses
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface LessonRepository extends CrudRepository<Lesson, Long> {
}
