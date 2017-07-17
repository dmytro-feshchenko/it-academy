package com.technoboom.repository.tasks;

import com.technoboom.model.tasks.Task;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/6/17
 * Time: 5:21 PM
 * Project: ITAcademy
 * Package: com.technoboom.model.tasks
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
public interface TaskRepository extends CrudRepository<Task, Long> {
}
