package com.example.tecairmobile.entities;

public class Books {

    private int userid;
    private int flightid;

    public Books(int userid, int flightid) {
        this.userid = userid;
        this.flightid = flightid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getFlightid() {
        return flightid;
    }

    public void setFlightid(int flightid) {
        this.flightid = flightid;
    }
}
