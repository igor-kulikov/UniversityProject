package ua.university.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@JsonIgnoreProperties({"students"})
@Entity
@Table(name = "ref_clubs")
public class Club {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "club_id")
    private int clubId;

    @Column(name = "club_name")
    private String clubName;

    @ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.REMOVE)
            @JoinTable(name = "student_club",
            joinColumns = {@JoinColumn(name = "club_id")},
            inverseJoinColumns = {@JoinColumn(name = "student_id")})
    private Set<Student> students = new HashSet<Student>();

    public Club() {
    }

    public Club(int clubId, String clubName) {
        this.clubId = clubId;
        this.clubName = clubName;
    }

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    public int getClubId() {
        return clubId;
    }

    public void setClubId(int clubId) {
        this.clubId = clubId;
    }

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    @Override
    public String toString() {
        return "Club{" +
                "clubId=" + clubId +
                ", clubName='" + clubName + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return clubName.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Club c = (Club) obj;
        if (!this.clubName.equals(c.clubName))
            return false;
        return true;
    }
}

