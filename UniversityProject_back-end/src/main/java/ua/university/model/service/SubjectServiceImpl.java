package ua.university.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.university.model.Subject;
import ua.university.repository.SubjectRepository;

import java.util.List;

@Service("jpaSubjectService")
@Repository
@Transactional
public class SubjectServiceImpl implements SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;

    public List<Subject> findAll() {
        return (List<Subject>) subjectRepository.findAll();
    }

    public Subject findOne(Integer id) {
        return subjectRepository.findOne(id);
    }

    public Subject save(Subject subject) {
        return subjectRepository.save(subject);
    }

    public void delete(Subject subject) {
        subjectRepository.delete(subject);
    }
}
