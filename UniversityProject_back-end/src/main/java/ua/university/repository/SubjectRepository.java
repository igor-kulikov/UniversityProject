package ua.university.repository;

import org.springframework.data.repository.CrudRepository;
import ua.university.model.Subject;

import java.util.List;

public interface SubjectRepository extends CrudRepository<Subject, Integer> {
    List<Subject> findAll();
    Subject findOne(Integer id);
    Subject save(Subject subject);
    void delete(Subject subject);
}
