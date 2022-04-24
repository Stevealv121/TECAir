package com.example.tecairmobile.entities;
/** Represents the Seats
 * @author Dennis Jimenez
 *
 */
public class Seats {

    private Integer id;
    private String description;
    private boolean state;
    private Integer user_id;
    private String airplane_plate;

    /**
     * Constructor for a Seats object
     * @param id Integer with the Id of the seat
     * @param description String with the description of the seat
     * @param state Boolean with the state of the seat
     * @param user_id Integer with the user id
     * @param airplane_plate String with the airplane plate
     */
    public Seats(Integer id, String description, boolean state, Integer user_id, String airplane_plate) {
        this.id = id;
        this.description = description;
        this.state = state;
        this.user_id = user_id;
        this.airplane_plate = airplane_plate;
    }

    /**
     * Empty Constructor for a Seats Object
     */
    public Seats(){

    }

    /**
     * Gets the id
     * @return Integer with the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the id
     * @param id Integer with the id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the description
     * @return String with the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the description
     * @param description String with the description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Gets the state
     * @return Boolean with the state
     */
    public boolean isState() {
        return state;
    }

    /**
     * Sets the state
     * @param state Boolean with the state
     */
    public void setState(boolean state) {
        this.state = state;
    }

    /**
     * Gets the user id
     * @return Integer with the user id
     */
    public Integer getUser_id() {
        return user_id;
    }

    /**
     * Sets the user id
     * @param user_id Integer with the user id
     */
    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    /**
     * Gets the airplane plate
     * @return String with the airplane plate
     */
    public String getAirplane_plate() {
        return airplane_plate;
    }

    /**
     * Sets the airplane plate
     * @param airplane_plate String with the airplane plate
     */
    public void setAirplane_plate(String airplane_plate) {
        this.airplane_plate = airplane_plate;
    }
}
