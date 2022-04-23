package com.example.tecairmobile.entities;

public class Airplane {

    private String plate;
    private String model;

    public Airplane(String plate, String model) {
        this.plate = plate;
        this.model = model;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}