package com.example.tecairmobile.entities;

public class Seats {

    private Integer id;
    private String description;
    private boolean state;
    private Integer user_id;
    private String airplane_plate;

    public Seats(Integer id, String description, boolean state, Integer user_id, String airplane_plate) {
        this.id = id;
        this.description = description;
        this.state = state;
        this.user_id = user_id;
        this.airplane_plate = airplane_plate;
    }

    public Seats(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getAirplane_plate() {
        return airplane_plate;
    }

    public void setAirplane_plate(String airplane_plate) {
        this.airplane_plate = airplane_plate;
    }
}
