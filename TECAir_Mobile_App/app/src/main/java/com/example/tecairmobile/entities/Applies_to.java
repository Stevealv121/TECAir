package com.example.tecairmobile.entities;

public class Applies_to {

    private int flightid;
    private int promotioncode;
    private int finalprice;

    public Applies_to(int flightid, int promotioncode, int finalprice) {
        this.flightid = flightid;
        this.promotioncode = promotioncode;
        this.finalprice = finalprice;
    }

    public int getFlightid() {
        return flightid;
    }

    public void setFlightid(int flightid) {
        this.flightid = flightid;
    }

    public int getPromotioncode() {
        return promotioncode;
    }

    public void setPromotioncode(int promotioncode) {
        this.promotioncode = promotioncode;
    }

    public int getFinalprice() {
        return finalprice;
    }

    public void setFinalprice(int finalprice) {
        this.finalprice = finalprice;
    }
}
