package com.example.tecairmobile.entities;

public class Flight_Stopover {

    private int flightid;
    private String stopover;

    public Flight_Stopover(int flightid, String stopover) {
        this.flightid = flightid;
        this.stopover = stopover;
    }

    public int getFlightid() {
        return flightid;
    }

    public void setFlightid(int flightid) {
        this.flightid = flightid;
    }

    public String getStopover() {
        return stopover;
    }

    public void setStopover(String stopover) {
        this.stopover = stopover;
    }
}
