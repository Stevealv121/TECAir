package com.example.tecairmobile.entities;

import java.io.Serializable;
/** Represents the union of three tables
 * @author Dennis Jimenez
 *
 */
public class FlightsandRoutes implements Serializable {

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
    private String minutes;
    private Integer promotion_code;
    private Integer flight_id;
    private Integer final_price;
    private String duration;

    /**
     * Constructor for Flightsandroutes
     * @param id An int with the id
     * @param boarding_gate An int with the boarding gate
     * @param price An int with the price
     * @param status A boolean with the status
     * @param route_code An int with the routecode
     * @param airplane_plate A String with the plate
     * @param origin A string with the origin
     * @param destination A string with the destination
     * @param year An int with the year
     * @param month An int with the month
     * @param day An int with the day
     * @param hours An int with the hour
     * @param minutes A string with the minutes
     * @param promotion_code An int with the promotion code
     * @param flight_id An int with the flight id
     * @param final_price An int with the final price
     * @param duration A string with the duration of the flight
     */
    public FlightsandRoutes(Integer id, Integer boarding_gate, Integer price, boolean status, Integer route_code, String airplane_plate, String origin, String destination, int year, int month, int day, int hours, String minutes, Integer promotion_code, Integer flight_id, Integer final_price, String duration) {
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
        this.duration = duration;
    }

    /**
     * Constructor for an empty flightsandroutes
     */
    public FlightsandRoutes(){

    }

    /**
     * Gets the id
     * @return An int with the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the id
     * @param id An int with the id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the boarding gate
     * @return An int with the boarding gate
     */
    public Integer getBoarding_gate() {
        return boarding_gate;
    }

    /**
     * Sets the boarding gate
     * @param boarding_gate An integer with the boarding gate
     */
    public void setBoarding_gate(Integer boarding_gate) {
        this.boarding_gate = boarding_gate;
    }

    /**
     * Gets the price
     * @return An integer with the price
     */
    public Integer getPrice() {
        return price;
    }

    /**
     * Sets the price
     * @param price An integer with the price
     */
    public void setPrice(Integer price) {
        this.price = price;
    }
    /**
     * Gets the status
     * @return boolean with the price
     */
    public boolean isStatus() {
        return status;
    }

    /**
     * Sets the status
     * @param status A boolean with the status
     */
    public void setStatus(boolean status) {
        this.status = status;
    }
    /**
     * Gets the route code
     * @return An integer with the route code
     */
    public Integer getRoute_code() {
        return route_code;
    }

    /**
     * Sets the route code
     * @param route_code An integer with the route code
     */
    public void setRoute_code(Integer route_code) {
        this.route_code = route_code;
    }
    /**
     * Gets the airplane plate
     * @return A string with the airplane plate
     */
    public String getAirplane_plate() {
        return airplane_plate;
    }

    /**
     * Sets the airplane plate
     * @param airplane_plate A string with the plate
     */
    public void setAirplane_plate(String airplane_plate) {
        this.airplane_plate = airplane_plate;
    }
    /**
     * Gets the origin
     * @return A string with the origin
     */
    public String getOrigin() {
        return origin;
    }

    /**
     * Sets origin
     * @param origin A string with the origin
     */
    public void setOrigin(String origin) {
        this.origin = origin;
    }
    /**
     * Gets the destination
     * @return An string with the destination
     */
    public String getDestination() {
        return destination;
    }

    /**
     * Sets destination
     * @param destination A String with the destination
     */
    public void setDestination(String destination) {
        this.destination = destination;
    }
    /**
     * Gets the year
     * @return An integer with the year
     */
    public int getYear() {
        return year;
    }

    /**
     * Sets year
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
     * @param month An int with the month
     */
    public void setMonth(int month) {
        this.month = month;
    }
    /**
     * Gets the price
     * @return An integer with the price
     */
    public int getDay() {
        return day;
    }

    /**
     * Sets the day
     * @param day An int with the day
     */
    public void setDay(int day) {
        this.day = day;
    }
    /**
     * Gets the hour
     * @return An integer with the hour
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
     * @return A string with the minutes
     */
    public String getMinutes() {
        return minutes;
    }

    /**
     * Sets minutes
     * @param minutes A String with the minutes
     */
    public void setMinutes(String minutes) {
        this.minutes = minutes;
    }
    /**
     * Gets the promotion code
     * @return An integer with the promotion code
     */
    public Integer getPromotion_code() {
        return promotion_code;
    }

    /**
     * Sets promotion code
     * @param promotion_code An integer with the promotion code
     */
    public void setPromotion_code(Integer promotion_code) {
        this.promotion_code = promotion_code;
    }
    /**
     * Gets the flight id
     * @return An integer with the flight id
     */
    public Integer getFlight_id() {
        return flight_id;
    }

    /**
     * Sets flight id
     * @param flight_id An integer with the flight id
     */
    public void setFlight_id(Integer flight_id) {
        this.flight_id = flight_id;
    }
    /**
     * Gets the final price
     * @return An integer with the final price
     */
    public Integer getFinal_price() {
        return final_price;
    }

    /**
     * Sets the final price
     * @param final_price An integer with the final price
     */
    public void setFinal_price(Integer final_price) {
        this.final_price = final_price;
    }
    /**
     * Gets the duration
     * @return A string with the duration
     */
    public String getDuration() {
        return duration;
    }

    /**
     * Sets the duration
     * @param duration A String with the duration
     */
    public void setDuration(String duration) {
        this.duration = duration;
    }
}
