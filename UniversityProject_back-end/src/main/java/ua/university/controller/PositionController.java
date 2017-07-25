package ua.university.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.university.model.Position;
import ua.university.model.service.PositionService;

import java.util.Collection;

@CrossOrigin
@RestController
@RequestMapping("/position")
public class PositionController {

    @Autowired
    PositionService positionService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<Position> list() {
        return positionService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Position getById(@PathVariable Integer id) {
        return positionService.findOne(id);
    }


    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Position create(@RequestBody Position position) {
        positionService.save(position);
        return position;
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Position updatePosition(@RequestBody Position position) {
        positionService.save(position);
        return position;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePosition(@PathVariable int id) {
        Position position = positionService.findOne(id);
        positionService.delete(position);
    }
}