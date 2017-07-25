package ua.university.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.university.model.Club;
import ua.university.repository.ClubRepository;

import java.util.List;

@Service("jpaClubService")
@Repository
@Transactional
public class ClubServiceImpl implements ClubService {
    @Autowired
    private ClubRepository clubRepository;

    public List<Club> findAll() {
        return (List<Club>) clubRepository.findAll();
    }

    public Club findOne(Integer id) {
        return clubRepository.findOne(id);
    }

    public Club save(Club club) {
        return clubRepository.save(club);
    }

    public void delete(Club club) {
        clubRepository.delete(club);
    }
}
