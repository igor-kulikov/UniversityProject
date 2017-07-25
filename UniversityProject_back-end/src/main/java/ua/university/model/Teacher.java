package ua.university.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "teacher")
@PrimaryKeyJoinColumn(name="person_id")
@SuppressWarnings("serial")
public class Teacher extends Person {
    @Id
    @Column(name = "teacher_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int personId;

    @ManyToOne
    @JoinColumn(name="position_id")
    private Position position;

    @ManyToOne
    @JoinColumn(name="subject_id")
    private Subject subject;

    public Teacher() {
    }

    public Teacher(int personId, String personFirstName, String personLastName, LocalDate personBirthday, Position position, Subject subject) {
        super(personId, personFirstName, personLastName, personBirthday);
        this.position = position;
        this.subject = subject;
    }

    @Override
    public String toString() {
        return this.getPersonFirstName() + " " + this.getPersonLastName() + "(" + this.getPersonBirthday() + ") - " +
                "position: " + position + "; " +
                "subject: " + subject;
    }

    @Override
    public int getPersonId() {
        return personId;
    }

    @Override
    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}

