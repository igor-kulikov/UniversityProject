package ua.university.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.context.support.GenericXmlApplicationContext;
import ua.university.model.service.ClubService;
import ua.university.model.service.SubjectService;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@JsonIgnoreProperties({"students"})
@Entity
@Table(name = "ref_subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subject_id", nullable = false)
    private int subjectId;

    @Column(name = "subject_name", nullable = false, length = 50)
    private String subjectName;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JoinTable(name = "student_subject",
            joinColumns = {@JoinColumn(name = "subject_id")},
            inverseJoinColumns = {@JoinColumn(name = "student_id")})
    private Set<Student> students = new HashSet<Student>();

    public Subject() {

    }

    public Subject(int subjectId, String subjectName) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
    }

    public Subject(String subjectName, Set<Student> students) {
        this.subjectName = subjectName;
        this.students = students;
    }

    public Subject(String subjectName) {
        this.subjectName = subjectName;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "Subject{" +
                "subjectId=" + subjectId +
                ", subjectName='" + subjectName + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return subjectName.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Subject c = (Subject) obj;
        if (!this.subjectName.equals(c.subjectName))
            return false;
        return true;
    }

    public static void main(String[] args) {
        GenericXmlApplicationContext ctx = new GenericXmlApplicationContext();
        SubjectService subjectService;

        ctx.load("classpath:spring-context.xml");
        ctx.refresh();
        subjectService = ctx.getBean("jpaSubjectService", SubjectService.class);

        /*Club club = new Club(20, "NewClub1");
        clubService.save(club);*/

        /*Club club = subjectService.findOne(7);
        subjectService.delete(club);*/

        System.out.println(subjectService.findAll());
    }
}
