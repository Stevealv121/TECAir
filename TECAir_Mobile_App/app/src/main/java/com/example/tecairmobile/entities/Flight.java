package com.example.tecairmobile.entities;
/** Represents a Flight
 * @author Dennis Jimenez
 *
 */
public class Flight {

    private Integer id;
    private Integer boarding_gate;
    private Integer price;
    private boolean status;
    private Integer route_code;
    private String airplane_plate;

    /**
     * Flight class constructor
     * @param id An integer with the id
     * @param boarding_gate An integer with the boarding gate
     * @param price An integer with the price
     * @param status A boolean with the status
     * @param route_code An integer with the route code
     * @param airplane_plate A String with the airplane plate
     */
    public Flight(Integer id, Integer boarding_gate, Integer price, boolean status, Integer route_code, String airplane_plate) {
        this.id = id;
        this.boarding_gate = boarding_gate;
        this.price = price;
        this.status = status;
        this.route_code = route_code;
        this.airplane_plate = airplane_plate;
    }

    /**
     * Creates an empty flight object
     */
    public Flight(){}

    /**
     * Gets the id
     * @return An integer with the flight id
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the id
     * @param id An integer with the flight id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the boarding gate
     * @return An integer with the boarding gate
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
     * @return An integer with the ticket price
     */
    public Integer getPrice() {
        return price;
    }

    /**
     * Sets the ticket price
     * @param price An integer with the ticket price
     */
    public void setPrice(Integer price) {
        this.price = price;
    }

    /**
     * Gets the status of the flight
     * @return A boolean with the status of the flight
     */
    public boolean isStatus() {
        return status;
    }

    /**
     * Sets the status
     * @param status A boolean with the status of the flight
     */
    public void setStatus(boolean status) {
        this.status = status;
    }

    /**
     * Gets the flight route code
     * @return An integer with the route code
     */
    public Integer getRoute_code() {
        return route_code;
    }

    /**
     * Sets the flight route code
     * @param route_code An integer with the route code
     */
    public void setRoute_code(Integer route_code) {
        this.route_code = route_code;
    }

    /**
     * Gets the airplane plate
     * @return A String with the airplane plate
     */
    public String getAirplane_plate() {
        return airplane_plate;
    }

    /**
     * Sets the airplane plate
     * @param airplane_plate A string with the airplane plate
     */
    public void setAirplane_plate(String airplane_plate) {
        this.airplane_plate = airplane_plate;
    }
}
