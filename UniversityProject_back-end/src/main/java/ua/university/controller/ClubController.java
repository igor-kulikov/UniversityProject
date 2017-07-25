package ua.university.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.university.model.Club;
import ua.university.model.service.ClubService;

import java.util.Collection;

@CrossOrigin
@RestController
@RequestMapping("/club")
public class ClubController {

    @Autowired
    ClubService clubService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Collection<Club> list() {
        return clubService.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Club getById(@PathVariable Integer id) {
        return clubService.findOne(id);
    }


    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Club create(@RequestBody Club club) {
        clubService.save(club);
        return club;
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Club updateClub(@RequestBody Club club) {
        clubService.save(club);
        return club;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteClub(@PathVariable int id) {
        Club club = clubService.findOne(id);
        clubService.delete(club);
    }
}