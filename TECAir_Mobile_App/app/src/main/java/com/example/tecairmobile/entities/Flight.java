package com.example.tecairmobile.entities;

public class Flight {

    private Integer id;
    private Integer boarding_gate;
    private Integer price;
    private boolean status;
    private Integer route_code;
    private String airplane_plate;

    public Flight(Integer id, Integer boarding_gate, Integer price, boolean status, Integer route_code, String airplane_plate) {
        this.id = id;
        this.boarding_gate = boarding_gate;
        this.price = price;
        this.status = status;
        this.route_code = route_code;
        this.airplane_plate = airplane_plate;
    }

    public Flight(){}


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBoarding_gate() {
        return boarding_gate;
    }

    public void setBoarding_gate(Integer boarding_gate) {
        this.boarding_gate = boarding_gate;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Integer getRoute_code() {
        return route_code;
    }

    public void setRoute_code(Integer route_code) {
        this.route_code = route_code;
    }

    public String getAirplane_plate() {
        return airplane_plate;
    }

    public void setAirplane_plate(String airplane_plate) {
        this.airplane_plate = airplane_plate;
    }
}
