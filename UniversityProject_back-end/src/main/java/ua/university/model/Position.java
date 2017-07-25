package ua.university.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@JsonIgnoreProperties({"students"})
@Entity
@Table(name = "ref_positions")
public class Position {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "position_id")
    private int positionId;

    @Column(name = "position_name")
    private String positionName;

    public Position() {
    }

    public Position(int positionId, String positionName) {
        this.positionId = positionId;
        this.positionName = positionName;
    }

    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    @Override
    public String toString() {
        return "Position{" +
                "positionId=" + positionId +
                ", positionName='" + positionName + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return positionName.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Position c = (Position) obj;
        if (!this.positionName.equals(c.positionName))
            return false;
        return true;
    }
}

