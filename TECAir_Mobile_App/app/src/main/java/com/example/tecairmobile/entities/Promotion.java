package com.example.tecairmobile.entities;

public class Promotion {

    private int promotioncode;
    private String description;
    private String title;
    private int day;
    private int month;
    private int year;
    private int discount;

    public Promotion(int promotioncode, String description, String title, int day, int month, int year, int discount) {
        this.promotioncode = promotioncode;
        this.description = description;
        this.title = title;
        this.day = day;
        this.month = month;
        this.year = year;
        this.discount = discount;
    }

    public int getPromotioncode() {
        return promotioncode;
    }

    public void setPromotioncode(int promotioncode) {
        this.promotioncode = promotioncode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }
}
