package com.technoboom;

import com.technoboom.models.users.User;
import com.technoboom.models.users.UserRepository;
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

    @Autowired
    public DatabaseLoader(UserRepository userRepository) {
        this.users = userRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        User testUser1 = this.users.save(new User("test-user-1", "pass", "oleg.2.test@gmail.com"));
        User testUser2 = this.users.save(new User("test-user-2", "pass-2", "user.2.test@gmail.com"));
    }
}
