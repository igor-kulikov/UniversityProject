package ua.university.model.service;

import ua.university.model.Position;

import java.util.List;

public interface PositionService {
    List<Position> findAll();
    Position findOne(Integer id);
    Position save(Position position);
    void delete(Position position);
}