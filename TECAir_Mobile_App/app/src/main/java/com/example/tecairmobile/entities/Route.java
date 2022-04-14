package com.example.tecairmobile.entities;

public class Route {

    private int routecode;
    private String origin;
    private String destination;
    private int year;
    private int month;
    private int day;
    private int hours;
    private int minutes;

    public Route(int routecode, String origin, String destination, int year, int month, int day, int hours, int minutes) {
        this.routecode = routecode;
        this.origin = origin;
        this.destination = destination;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;

    }

    public int getRoutecode() {
        return routecode;
    }

    public void setRoutecode(int routecode) {
        this.routecode = routecode;
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
}
