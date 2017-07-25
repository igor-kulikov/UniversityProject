package ua.university.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.university.model.Student;
import ua.university.model.service.StudentService;

import java.util.Collection;

@CrossOrigin
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<Student> list() {
        return studentService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Student getById(@PathVariable Integer id) {
        return studentService.findOne(id);
    }


    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Student create(@RequestBody Student student) {
        studentService.save(student);
        return student;
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Student updateStudent(@RequestBody Student student) {
        System.out.println("Update student: " + student.getPersonBirthday());
        studentService.save(student);
        return student;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteStudent(@PathVariable int id) {
        Student student = studentService.findOne(id);
        studentService.delete(student);
    }
}