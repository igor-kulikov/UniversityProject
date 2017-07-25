package ua.university.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.university.model.Subject;
import ua.university.model.service.SubjectService;

import java.util.Collection;

@CrossOrigin
@RestController
@RequestMapping("/subject")
public class SubjectController {

        @Autowired
        SubjectService subjectService;

        @RequestMapping(value = "/", method = RequestMethod.GET)
        public Collection<Subject> list() {
            return subjectService.findAll();
        }

        @RequestMapping(value = "/{id}", method = RequestMethod.GET)
        public Subject getById(@PathVariable Integer id) {
            return subjectService.findOne(id);
        }


        @RequestMapping(value = "/", method = RequestMethod.POST)
        public Subject create(@RequestBody Subject subject) {
            subjectService.save(subject);
            return subject;
        }

        @RequestMapping(value = "/", method = RequestMethod.PUT)
        public Subject updateSubject(@RequestBody Subject subject) {
            subjectService.save(subject);
            return subject;
        }

        @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
        public void deleteSubject(@PathVariable int id) {
            Subject subject = subjectService.findOne(id);
            subjectService.delete(subject);
        }
    }