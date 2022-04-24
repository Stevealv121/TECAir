package com.example.tecairmobile.entities;

/** Represents an Airplane
 * @author Dennis Jimenez
 *
 */

public class Airplane {

    private String plate;
    private String model;

    /**
     * Creates airplane with specified model and plate
     * @param plate A string with the plane's plate
     * @param model A string with the plane's model
     */
    public Airplane(String plate, String model) {
        this.plate = plate;
        this.model = model;
    }

    /**
     * Gets airplane plate
     * @return A string with the plate
     */
    public String getPlate() {
        return plate;
    }

    /**
     * Sets the plane's plate
     * @param plate A string containing the plane's plate
     */
    public void setPlate(String plate) {
        this.plate = plate;
    }

    /**
     * Gets the plane's model
     * @return A String with the model of the plane
     */
    public String getModel() {
        return model;
    }

    /**
     * Sets the plane's model
     * @param model A string containing the plane's model
     */
    public void setModel(String model) {
        this.model = model;
    }
}