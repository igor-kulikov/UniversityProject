package ua.university.repository;

import org.springframework.data.repository.CrudRepository;
import ua.university.model.Teacher;

import java.util.List;

public interface TeacherRepository extends CrudRepository<Teacher, Integer> {
    List<Teacher> findAll();
    Teacher findOne(Integer id);
    Teacher save(Teacher teacher);
    void delete(Teacher teacher);
}
