package ua.university.repository;

import org.springframework.data.repository.CrudRepository;
import ua.university.model.Position;

import java.util.List;

public interface PositionRepository extends CrudRepository<Position, Integer> {
    List<Position> findAll();
    Position findOne(Integer id);
    Position save(Position position);
    void delete(Position position);
}
