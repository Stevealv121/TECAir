package com.example.tecairmobile.entities;

/** Represents the Books table
 * @author Dennis Jimenez
 *
 */
public class Books {

    private int userid;
    private int flightid;

    /**
     * Constructor for books
     * @param userid Int with the user ID
     * @param flightid Int with the flight ID
     */
    public Books(int userid, int flightid) {
        this.userid = userid;
        this.flightid = flightid;
    }

    /**
     * Gets the user id
     * @return An int with the user id
     */
    public int getUserid() {
        return userid;
    }

    /**
     * Sets the user id
     * @param userid An int with the user id
     */
    public void setUserid(int userid) {
        this.userid = userid;
    }

    /**
     * Gets flight id
     * @return An int with the flight id
     */
    public int getFlightid() {
        return flightid;
    }

    /**
     * Sets flight id
     * @param flightid An int with the flightI id
     */
    public void setFlightid(int flightid) {
        this.flightid = flightid;
    }
}
