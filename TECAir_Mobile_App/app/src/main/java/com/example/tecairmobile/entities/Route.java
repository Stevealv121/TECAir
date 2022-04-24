package com.example.tecairmobile.entities;
/** Represents the Route
 * @author Dennis Jimenez
 *
 */
public class Route {

    private int route_code;
    private String origin;
    private String destination;
    private int year;
    private int month;
    private int day;
    private int hours;
    private int minutes;

    /**
     * Constructor for an empty Route object
     */
    public Route(){}

    /**
     * Constructor for a route object
     * @param route_code An int with the route code
     * @param origin A String with the origin
     * @param destination A string with the destination
     * @param year An int with the year
     * @param month An int with the month
     * @param day An int with the day
     * @param hours An int with the Hours
     * @param minutes An int with the minutes
     */
    public Route(int route_code, String origin, String destination, int year, int month, int day, int hours, int minutes) {
        this.route_code = route_code;
        this.origin = origin;
        this.destination = destination;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
    }

    /**
     * Gets the route code
     * @return An integer with the route code
     */
    public int getRoute_code() {
        return route_code;
    }

    /**
     * Sets the route code
     * @param route_code An integer with the route code
     */
    public void setRoute_code(int route_code) {
        this.route_code = route_code;
    }

    /**
     * Gets the origin
     * @return A String with the origin
     */
    public String getOrigin() {
        return origin;
    }

    /**
     * Sets the origin
     * @param origin A string with the origin
     */
    public void setOrigin(String origin) {
        this.origin = origin;
    }

    /**
     * Gets the destination
     * @return A string with the destination
     */
    public String getDestination() {
        return destination;
    }

    /**
     * Sets the destination
     * @param destination A string with the destination
     */
    public void setDestination(String destination) {
        this.destination = destination;
    }

    /**
     * Gets the year
     * @return An int with the year
     */
    public int getYear() {
        return year;
    }

    /**
     * Sets the year
     * @param year An int with the year
     */
    public void setYear(int year) {
        this.year = year;
    }

    /**
     * Gets the month
     * @return An integer with the month
     */
    public int getMonth() {
        return month;
    }

    /**
     * Sets the month
     * @param month An integer with the month
     */
    public void setMonth(int month) {
        this.month = month;
    }

    /**
     * Gets the day
     * @return An integer with the day
     */
    public int getDay() {
        return day;
    }

    /**
     * Sets the day
     * @param day An integer with the day
     */
    public void setDay(int day) {
        this.day = day;
    }

    /**
     * Gets the hours
     * @return An integer with the hours
     */
    public int getHours() {
        return hours;
    }

    /**
     * Sets the hours
     * @param hours An integer with the hours
     */
    public void setHours(int hours) {
        this.hours = hours;
    }

    /**
     * Gets the minutes
     * @return An integer with the minutes
     */
    public int getMinutes() {
        return minutes;
    }

    /**
     * Sets the minutes
     * @param minutes An integer with the minutes
     */
    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }
}
