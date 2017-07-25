package ua.university.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.university.repository.PositionRepository;
import ua.university.model.Position;

import java.util.List;

@Service("jpaPositionService")
@Repository
@Transactional
public class PositionServiceImpl implements PositionService {
    @Autowired
    private PositionRepository positionRepository;

    public Position findOne(Integer id) {
        return positionRepository.findOne(id);
    }

    public Position save(Position position) {
        return positionRepository.save(position);
    }

    public void delete(Position position) {
        positionRepository.delete(position);
    }

    public List<Position> findAll() {
        return (List<Position>) positionRepository.findAll();
    }
}
