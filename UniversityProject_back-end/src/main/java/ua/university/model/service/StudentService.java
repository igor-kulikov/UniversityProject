package ua.university.model.service;

import ua.university.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> findAll();
    Student findOne(Integer id);
    Student save(Student student);
    void delete(Student student);
}
