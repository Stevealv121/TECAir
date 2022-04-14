package com.example.tecairmobile.entities;

public class Flight {

    private int id;
    private int boardinggate;
    private int price;
    private boolean status;
    private int routecode;
    private String airplaneplate;

    public Flight(int id, int boardinggate, int price, boolean status, int routecode, String airplaneplate) {
        this.id = id;
        this.boardinggate = boardinggate;
        this.price = price;
        this.status = status;
        this.routecode = routecode;
        this.airplaneplate = airplaneplate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBoardinggate() {
        return boardinggate;
    }

    public void setBoardinggate(int boardinggate) {
        this.boardinggate = boardinggate;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getRoutecode() {
        return routecode;
    }

    public void setRoutecode(int routecode) {
        this.routecode = routecode;
    }

    public String getAirplaneplate() {
        return airplaneplate;
    }

    public void setAirplaneplate(String airplaneplate) {
        this.airplaneplate = airplaneplate;
    }
}
