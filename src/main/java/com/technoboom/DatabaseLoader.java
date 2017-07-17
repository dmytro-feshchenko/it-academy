package com.technoboom;

import com.technoboom.model.courses.Category;
import com.technoboom.repository.courses.CategoryRepository;
import com.technoboom.model.courses.Course;
import com.technoboom.repository.courses.CourseRepository;
import com.technoboom.model.users.User;
import com.technoboom.repository.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/14/17
 * Time: 12:58 PM
 * Project: ITAcademy
 * Package: com.technoboom
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository users;
    private final CourseRepository courses;
    private final CategoryRepository categories;

    @Autowired
    public DatabaseLoader(UserRepository userRepository,
                          CourseRepository courseRepository,
                          CategoryRepository categoryRepository
    ) {
        this.users = userRepository;
        this.courses = courseRepository;
        this.categories = categoryRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Category categoryJavaCourses = this.categories.save(new Category("Java", "Java Programming Language"));
        Category categoryJavaScriptCourses = this.categories.save(
                new Category("JavaScript", "JavaScript Programming Language")
        );
        Category categoryAndroidCourses = this.categories.save(
                new Category("Android", "Android platform")
        );

        User testUser1 = this.users.save(new User("test-user-1", "pass", "oleg.2.test@gmail.com"));
        User testUser2 = this.users.save(new User("test-user-2", "pass-2", "user.2.test@gmail.com"));

        this.courses.save(new Course("Test course 1", "Description of the first course", 1, testUser1));
        this.courses.save(new Course("Test course 2", "Description of the second course", 5, testUser1));
        this.courses.save(new Course("Test course 3", "Description of the third course", 5, testUser2));
    }
}
