package com.technoboom.models.users;

import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

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
@RepositoryRestResource(exported = false)
public interface UserRepository extends Repository<User, Long> {

    User save(User user);

    User findByUsername(String username);

}
