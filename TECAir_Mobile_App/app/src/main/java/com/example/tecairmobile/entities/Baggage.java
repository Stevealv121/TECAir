package com.example.tecairmobile.entities;

/** Represents the Baggage
 * @author Dennis Jimenez
 *
 */
public class Baggage {

    private int id;
    private String color;
    private int weight;

    /**
     * Creates a baggage object
     * @param id An integer representing id
     * @param color A String representing color
     * @param weight An integer representing the weight
     */
    public Baggage(int id, String color, int weight) {
        this.id = id;
        this.color = color;
        this.weight = weight;
    }

    /**
     * Gets the baggage id
     * @return An integer representing the id
     */
    public int getId() {
        return id;
    }

    /**
     * Sets the id
     * @param id An integer representing the id
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Gets the color of the baggage
     * @return A string containing the color
     */
    public String getColor() {
        return color;
    }

    /**
     * Sets the color of the baggage
     * @param color A string representing the color
     */
    public void setColor(String color) {
        this.color = color;
    }

    /**
     * Gets the weight of the baggage
     * @return An int representing the weight
     */
    public int getWeight() {
        return weight;
    }

    /**
     * Sets the weight
     * @param weight A string representing the desired weight
     */
    public void setWeight(int weight) {
        this.weight = weight;
    }
}
