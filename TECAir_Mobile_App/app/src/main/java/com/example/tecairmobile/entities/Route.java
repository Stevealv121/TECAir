package com.example.tecairmobile.entities;

public class Route {

    private Integer route_code;
    private String origin;
    private String destination;
    private Integer year;
    private Integer month;
    private Integer day;
    private Integer hours;
    private Integer minutes;

    public Route(Integer route_code, String origin, String destination, Integer year, Integer month, Integer day, Integer hours, Integer minutes) {
        this.route_code = route_code;
        this.origin = origin;
        this.destination = destination;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
    }

    public Integer getRoute_code() {
        return route_code;
    }

    public void setRoute_code(Integer route_code) {
        this.route_code = route_code;
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

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getHours() {
        return hours;
    }

    public void setHours(Integer hours) {
        this.hours = hours;
    }

    public Integer getMinutes() {
        return minutes;
    }

    public void setMinutes(Integer minutes) {
        this.minutes = minutes;
    }
}
