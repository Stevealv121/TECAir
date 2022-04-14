package com.example.tecairmobile.entities;

public class Has {

    private int baggageid;
    private int userid;
    private int price;

    public Has(int baggageid, int userid, int price) {
        this.baggageid = baggageid;
        this.userid = userid;
        this.price = price;
    }

    public int getBaggageid() {
        return baggageid;
    }

    public void setBaggageid(int baggageid) {
        this.baggageid = baggageid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
