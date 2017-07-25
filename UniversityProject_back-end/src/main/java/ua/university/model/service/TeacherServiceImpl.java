package ua.university.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.university.repository.TeacherRepository;
import ua.university.model.Teacher;

import java.util.List;

@Service("jpaTeacherService")
@Repository
@Transactional
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    public List<Teacher> findAll() {
        return (List<Teacher>) teacherRepository.findAll();
    }

    public Teacher findOne(Integer id) {
        return teacherRepository.findOne(id);
    }

    public Teacher save(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public void delete(Teacher teacher) {
        teacherRepository.delete(teacher);
    }
}
