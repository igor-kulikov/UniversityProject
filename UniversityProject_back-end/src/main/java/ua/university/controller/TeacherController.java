package ua.university.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.university.model.Teacher;
import ua.university.model.service.TeacherService;

import java.util.Collection;

@CrossOrigin
@RestController
@RequestMapping("/teacher")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<Teacher> list() {
        return teacherService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Teacher getById(@PathVariable Integer id) {
        return teacherService.findOne(id);
    }


    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Teacher create(@RequestBody Teacher teacher) {
        teacherService.save(teacher);
        return teacher;
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Teacher updateTeacher(@RequestBody Teacher teacher) {
        teacherService.save(teacher);
        return teacher;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteTeacher(@PathVariable int id) {
        Teacher teacher = teacherService.findOne(id);
        teacherService.delete(teacher);
    }
}