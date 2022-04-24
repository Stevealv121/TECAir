package com.example.tecairmobile.entities;

public class Applies_to {

    private Integer promotion_code;
    private Integer flight_id;
    private Integer final_price;

    public Applies_to(Integer promotion_code, Integer flight_id, Integer final_price) {
        this.promotion_code = promotion_code;
        this.flight_id = flight_id;
        this.final_price = final_price;
    }

    public Integer getPromotion_code() {
        return promotion_code;
    }

    public void setPromotion_code(Integer promotion_code) {
        this.promotion_code = promotion_code;
    }

    public Integer getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(Integer flight_id) {
        this.flight_id = flight_id;
    }

    public Integer getFinal_price() {
        return final_price;
    }

    public void setFinal_price(Integer final_price) {
        this.final_price = final_price;
    }

}
