package ua.university.repository;

import org.springframework.data.repository.CrudRepository;
import ua.university.model.Club;

import java.util.List;

public interface ClubRepository extends CrudRepository<Club, Integer> {
    List<Club> findAll();
    Club findOne(Integer id);
    Club save(Club club);
    void delete(Club club);
}
