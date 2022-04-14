package com.example.tecairmobile.entities;

public class Seats {

    private int id;
    private String description;
    private boolean state;
    private int userid;
    private String airplaneplate;

    public Seats(int id, String description, boolean state, int userid, String airplaneplate) {
        this.id = id;
        this.description = description;
        this.state = state;
        this.userid = userid;
        this.airplaneplate = airplaneplate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getAirplaneplate() {
        return airplaneplate;
    }

    public void setAirplaneplate(String airplaneplate) {
        this.airplaneplate = airplaneplate;
    }
}
