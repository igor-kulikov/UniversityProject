package ua.university.model.service;

import ua.university.model.Club;

import java.util.List;

public interface ClubService {
    List<Club> findAll();
    Club findOne(Integer id);
    Club save(Club club);
    void delete(Club club);
}