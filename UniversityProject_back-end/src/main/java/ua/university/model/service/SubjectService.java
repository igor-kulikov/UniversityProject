package ua.university.model.service;

import ua.university.model.Subject;
import java.util.List;

public interface SubjectService {
    List<Subject> findAll();
    Subject findOne(Integer id);
    Subject save(Subject subject);
    void delete(Subject subject);
}
