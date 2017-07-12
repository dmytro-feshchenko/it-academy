package com.technoboom.models.courses;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 * Created by IntelliJ IDEA.
 * Date: 7/6/17
 * Time: 5:20 PM
 * Project: ITAcademy
 * Package: com.technoboom.models.courses
 *
 * @author dmitryi
 * @version 1.0
 * @since 1.0
 */
@PreAuthorize("hasRole('ROLE_OWNER')")
public interface CourseRepository extends PagingAndSortingRepository<Course, Long> {

    @Override
    @PreAuthorize("#course?.owner == null or #course?.owner?.username == authentication?.username")
    Course save(@Param("course") Course course);

    @Override
    @PreAuthorize("@courseRepository.findOne('#id')?.owner?.username == authentication?.username")
    void delete(@Param("id") Long id);

    @Override
    @PreAuthorize("#course?.owner?.username == authentication?.username")
    void delete(@Param("course") Course course);
}
