package com.example.tecairmobile.entities;

/** Represents an Has table
 * @author Dennis Jimenez
 *
 */
public class Has {

    private int baggageid;
    private int userid;
    private int price;

    /**
     * Has object constructor
     * @param baggageid Int with the baggage id
     * @param userid Int with the user
     * @param price Int with the price
     */
    public Has(int baggageid, int userid, int price) {
        this.baggageid = baggageid;
        this.userid = userid;
        this.price = price;
    }

    /**
     * Gets the baggage id
     * @return An integer with the baggage id
     */
    public int getBaggageid() {
        return baggageid;
    }

    /**
     * Sets the baggage id
     * @param baggageid An integer with the baggage id
     */
    public void setBaggageid(int baggageid) {
        this.baggageid = baggageid;
    }

    /**
     * Gets the user id
     * @return An integer with the user id
     */
    public int getUserid() {
        return userid;
    }

    /**
     * Sets the user id
     * @param userid An integer with the user id
     */
    public void setUserid(int userid) {
        this.userid = userid;
    }

    /**
     * Gets the price
     * @return An integer with the price
     */
    public int getPrice() {
        return price;
    }

    /**
     * Sets the price
     * @param price An integer with the price
     */
    public void setPrice(int price) {
        this.price = price;
    }
}
