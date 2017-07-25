package ua.university.model.service;

import ua.university.model.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> findAll();
    Teacher findOne(Integer id);
    Teacher save(Teacher teacher);
    void delete(Teacher teacher);
}
