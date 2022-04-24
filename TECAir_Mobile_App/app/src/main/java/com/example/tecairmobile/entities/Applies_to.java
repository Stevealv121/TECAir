package com.example.tecairmobile.entities;

/** Represents the Applies_to table
 * @author Dennis Jimenez
 *
 */
public class Applies_to {

    private Integer promotion_code;
    private Integer flight_id;
    private Integer final_price;

    /**
     * Creates a new applies to object
     * @param promotion_code An integer representing a valid promotion code
     * @param flight_id An integer representing the flight ID
     * @param final_price An integer representing the final price of the flight
     */
    public Applies_to(Integer promotion_code, Integer flight_id, Integer final_price) {
        this.promotion_code = promotion_code;
        this.flight_id = flight_id;
        this.final_price = final_price;
    }

    /**
     * Gets the promotion code
     * @return An integer representing the promotion code
     */
    public Integer getPromotion_code() {
        return promotion_code;
    }

    /**
     * Sets the promotion code
     * @param promotion_code An integer representing the promotion code
     */
    public void setPromotion_code(Integer promotion_code) {
        this.promotion_code = promotion_code;
    }

    /**
     * Gets the flight id
     * @return An integer representing the flight id
     */
    public Integer getFlight_id() {
        return flight_id;
    }

    /**
     * Sets the flight id
     * @param flight_id An integer representing the flight id
     */
    public void setFlight_id(Integer flight_id) {
        this.flight_id = flight_id;
    }

    /**
     * Gets the final price of the flight
     * @return An integer with the final price
     */
    public Integer getFinal_price() {
        return final_price;
    }

    /**
     * Sets the final price of the flight
     * @param final_price an integer representing final price
     */
    public void setFinal_price(Integer final_price) {
        this.final_price = final_price;
    }

}
