package com.technoboom.models.users;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/6/17
 * Time: 5:22 PM
 * Project: ITAcademy
 * Package: com.technoboom.models.users
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface UserRepository extends CrudRepository<User, Long> {
}
