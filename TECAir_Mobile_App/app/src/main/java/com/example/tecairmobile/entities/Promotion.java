package com.example.tecairmobile.entities;
/** Represents the promotions
 * @author Dennis Jimenez
 *
 */
public class Promotion {

    private int promotion_code;
    private String description;
    private String title;
    private int day;
    private int month;
    private int year;
    private int discount;

    /**
     * Constructor for a promotion object
     * @param promotioncode Integer with the promotion code
     * @param description String with the promotion description
     * @param title String wth the title
     * @param day Integer with the day
     * @param month Integer with the month
     * @param year Integer with the year
     * @param discount Integer with the value of the discount
     */
    public Promotion(int promotioncode, String description, String title, int day, int month, int year, int discount) {
        this.promotion_code = promotioncode;
        this.description = description;
        this.title = title;
        this.day = day;
        this.month = month;
        this.year = year;
        this.discount = discount;
    }

    /**
     * Construnctor for an empty promotion object
     */
    public Promotion(){}

    /**
     * Gets the promotion code
     * @return An int with the promotion code
     */
    public int getPromotioncode() {
        return promotion_code;
    }

    /**
     * Sets the promotion code
     * @param promotioncode An int with the promotion code
     */
    public void setPromotioncode(int promotioncode) {
        this.promotion_code = promotioncode;
    }

    /**
     * Gets the description
     * @return A string with the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the description
     * @param description A string with the description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Gets the title
     * @return A string with the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * Gets the title
     * @param title A string with the title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets the day
     * @return An int with the day
     */
    public int getDay() {
        return day;
    }

    /**
     * Sets the day
     * @param day An int with the day
     */
    public void setDay(int day) {
        this.day = day;
    }

    /**
     * Gets the month
     * @return An int with the month
     */
    public int getMonth() {
        return month;
    }

    /**
     * Sets the month
     * @param month An int with the month
     */
    public void setMonth(int month) {
        this.month = month;
    }

    /**
     * Gets the year
     * @return An int with the year
     */
    public int getYear() {
        return year;
    }

    /**
     * Sets the year
     * @param year An int with the year
     */
    public void setYear(int year) {
        this.year = year;
    }

    /**
     * Gets the discount
     * @return An int with the discount
     */
    public int getDiscount() {
        return discount;
    }

    /**
     * Sets the discount
     * @param discount An int with the discount
     */
    public void setDiscount(int discount) {
        this.discount = discount;
    }
}
