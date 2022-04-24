package com.example.tecairmobile.entities;
/** Represents an Stopover table
 * @author Dennis Jimenez
 *
 */
public class Flight_Stopover {

    private int flightid;
    private String stopover;

    /**
     * Stopover constructor
     * @param flightid An integer with the flight id
     * @param stopover A string with the stopover
     */
    public Flight_Stopover(int flightid, String stopover) {
        this.flightid = flightid;
        this.stopover = stopover;
    }

    /**
     * Gets the flight id
     * @return An integer with the flight id
     */
    public int getFlightid() {
        return flightid;
    }

    /**
     * Sets the flight id
     * @param flightid An integer with the flight id
     */
    public void setFlightid(int flightid) {
        this.flightid = flightid;
    }

    /**
     * Gets the stopover
     * @return A string with the stopover
     */
    public String getStopover() {
        return stopover;
    }

    /**
     * Sets the stopover
     * @param stopover A string with the flight stopover
     */
    public void setStopover(String stopover) {
        this.stopover = stopover;
    }
}
