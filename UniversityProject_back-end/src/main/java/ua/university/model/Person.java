package ua.university.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import ua.university.utils.LocalDateDeserializer;
import ua.university.utils.LocalDateSerializer;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "person")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "person_id", nullable = false)
    private int personId;

    @Column(name = "last_name", length = 50)
    private String personLastName;

    @Column(name = "first_name", length = 30)
    private String personFirstName;

    @Column(name = "birthday")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate personBirthday;

    public Person() {
    }

    public Person(int personId, String personFirstName, String personLastName, LocalDate personBirthday) {
        this.personId = personId;
        this.personFirstName = personFirstName;
        this.personLastName = personLastName;
        this.personBirthday = personBirthday;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getPersonLastName() {
        return personLastName;
    }

    public void setPersonLastName(String personLastName) {
        this.personLastName = personLastName;
    }

    public String getPersonFirstName() {
        return personFirstName;
    }

    public void setPersonFirstName(String personFirstName) {
        this.personFirstName = personFirstName;
    }

    public LocalDate getPersonBirthday() {
        return personBirthday;
    }

    public void setPersonBirthday(LocalDate personBirthday) {
        this.personBirthday = personBirthday;
    }

    @Override
    public String toString() {
        return "Person{" +
                "personId=" + personId +
                ", personLastName='" + personLastName + '\'' +
                ", personFirstName='" + personFirstName + '\'' +
                ", personBirthday=" + personBirthday +
                '}';
    }

    @Override
    public int hashCode() {
        int result = (personLastName != null ? personLastName.hashCode() : 0);
        result = 31 * result + (personFirstName != null ? personFirstName.hashCode() : 0);
        result = 31 * result + (personBirthday != null ? personBirthday.hashCode() : 0);
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;

        Person p = (Person) obj;
        if (!this.personLastName.equals(p.personLastName)) return false;
        if (!this.personFirstName.equals(p.personFirstName)) return false;
        if (!this.personBirthday.equals(p.personBirthday)) return false;

        return true;
    }
}
