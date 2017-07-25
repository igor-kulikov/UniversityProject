package ua.university.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.university.model.Student;
import ua.university.repository.StudentRepository;

import java.util.List;

@Service("jpaStudentService")
@Repository
@Transactional
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> findAll() {
        return (List<Student>) studentRepository.findAll();
    }

    public Student findOne(Integer id) {
        return studentRepository.findOne(id);
    }

    public Student save(Student student) {
        return studentRepository.save(student);
    }

    public void delete(Student student) {
        studentRepository.delete(student);
    }
}
