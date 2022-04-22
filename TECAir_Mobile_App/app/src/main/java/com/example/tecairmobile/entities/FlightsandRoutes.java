package com.example.tecairmobile.entities;

public class FlightsandRoutes {

    private Integer id;
    private Integer boarding_gate;
    private Integer price;
    private boolean status;
    private Integer route_code;
    private String airplane_plate;
    private String origin;
    private String destination;
    private int year;
    private int month;
    private int day;
    private int hours;
    private int minutes;
    private Integer promotion_code;
    private Integer flight_id;
    private Integer final_price;

    public FlightsandRoutes(Integer id, Integer boarding_gate, Integer price, boolean status, Integer route_code, String airplane_plate, String origin, String destination, int year, int month, int day, int hours, int minutes, Integer promotion_code, Integer flight_id, Integer final_price) {
        this.id = id;
        this.boarding_gate = boarding_gate;
        this.price = price;
        this.status = status;
        this.route_code = route_code;
        this.airplane_plate = airplane_plate;
        this.origin = origin;
        this.destination = destination;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
        this.promotion_code = promotion_code;
        this.flight_id = flight_id;
        this.final_price = final_price;
    }

    public FlightsandRoutes(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBoarding_gate() {
        return boarding_gate;
    }

    public void setBoarding_gate(Integer boarding_gate) {
        this.boarding_gate = boarding_gate;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Integer getRoute_code() {
        return route_code;
    }

    public void setRoute_code(Integer route_code) {
        this.route_code = route_code;
    }

    public String getAirplane_plate() {
        return airplane_plate;
    }

    public void setAirplane_plate(String airplane_plate) {
        this.airplane_plate = airplane_plate;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

    public Integer getPromotion_code() {
        return promotion_code;
    }

    public void setPromotion_code(Integer promotion_code) {
        this.promotion_code = promotion_code;
    }

    public Integer getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(Integer flight_id) {
        this.flight_id = flight_id;
    }

    public Integer getFinal_price() {
        return final_price;
    }

    public void setFinal_price(Integer final_price) {
        this.final_price = final_price;
    }
}
