package mk.foodanddrinkz.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
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

    public Place() {

    }

    public String[] getWorkingHours(){
        String [] opened = new String[7];
        opened[0] = monday;
        opened[1] = tuesday;
        opened[2] = wednesday;
        opened[3] = thursday;
        opened[4] = friday;
        opened[5] = saturday;
        opened[6] = sunday;
        return opened;
    }
    public String[] getAttributes(){
        return attributes.split(";");
    }

    public String getName() {
        return name;
    }
    public String getTest(){
        return "test";
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public Integer getReviewCount() {
        return reviewCount;
    }

    public void setReviewCount(Integer reviewCount) {
        this.reviewCount = reviewCount;
    }

    public void setAttributes(String attributes) {
        this.attributes = attributes;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
