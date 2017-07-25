package ua.university.repository;

import org.springframework.data.repository.CrudRepository;
import ua.university.model.Student;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Integer> {
    List<Student> findAll();
    Student findOne(Integer id);
    Student save(Student student);
    void delete(Student student);
}
