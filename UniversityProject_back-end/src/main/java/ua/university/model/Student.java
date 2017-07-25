package ua.university.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "student")
@PrimaryKeyJoinColumn(name="person_id")
public class Student extends Person {
    @Id
    @Column(name = "student_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int personId;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "student_subject",
            joinColumns = {@JoinColumn(name = "student_id")},
            inverseJoinColumns = {@JoinColumn(name = "subject_id")})
    private Set<Subject> subjects = new HashSet<Subject>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "student_club",
            joinColumns = {@JoinColumn(name = "student_id")},
            inverseJoinColumns = {@JoinColumn(name = "club_id")})
    private Set<Club> clubs = new HashSet<Club>();

    public Student() {
    }

    public Student(String firstName, String lastName, LocalDate birthday, Set<Subject> subjects, Set<Club> clubs) {
        super(0, firstName, lastName, birthday);
        this.subjects = subjects;
        this.clubs = clubs;
    }

    @Override
    public int getPersonId() {
        return personId;
    }

    @Override
    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }

    public Set<Club> getClubs() {
        return clubs;
    }

    public void setClubs(Set<Club> clubs) {
        this.clubs = clubs;
    }


    @Override
    public String toString() {
        return "Student{" +
                "person=" + super.toString() +
                ", subjects=" + subjects +
                ", clubs=" + clubs +
                '}';
    }
}
