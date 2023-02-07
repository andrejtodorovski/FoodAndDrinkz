package mk.foodanddrinkz.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.Hibernate;

import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    String name;
    Float rating;
    Integer reviewCount;
    String category;
    String attributes;
    String address;
    String phoneNumber;
    String monday;
    String tuesday;
    String wednesday;
    String thursday;
    String friday;
    String saturday;
    String sunday;
    String imgUrl;
    Float latitude;
    Float longitude;

    public Place(String name, String rating, String reviewCount, String category, String attributes, String address, String phoneNumber, String monday, String tuesday, String wednesday, String thursday, String friday, String saturday, String sunday, String imgUrl, String latitude, String longitude) {
        this.name = name;
        this.rating = Float.valueOf(rating);
        this.reviewCount = Integer.valueOf(reviewCount);
        this.category = category;
        this.attributes = attributes;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
        this.imgUrl = imgUrl;
        this.latitude = Float.valueOf(latitude);
        this.longitude = Float.valueOf(longitude);
    }


    public String[] getA(){
        return attributes.split(";");
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Place place = (Place) o;
        return id != null && Objects.equals(id, place.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
