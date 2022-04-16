package com.example.tecairmobile.Utilities;

public class Utilities {

    public static final String TABLE_AIRPLANE = "airplane";
    public static final String TABLE_APTO = "applies_to";
    public static final String TABLE_BAGGAGE = "baggage";
    public static final String TABLE_BOOKS = "books";
    public static final String TABLE_FLIGHTS = "flights";
    public static final String TABLE_FLIGHTSTO = "stopovers";
    public static final String TABLE_HAS = "has";
    public static final String TABLE_PROMOTION = "promotions";
    public static final String TABLE_ROLE = "role";
    public static final String TABLE_ROUTE = "route";
    public static final String TABLE_SEATS = "seats";
    public static final String TABLE_USER = "user";

    public static final String FIELD_PLATE = "plate";
    public static final String FIELD_MODEL = "model";
    public static final String FIELD_FID = "flight_id";
    public static final String FIELD_PCODE = "promotion_code";
    public static final String FIELD_FPRICE = "final_price";
    public static final String FIELD_ID = "id";
    public static final String FIELD_COLOR = "color";
    public static final String FIELD_WEIGHT = "weight";
    public static final String FIELD_UID = "user_id";
    public static final String FIELD_BGATE = "boarding_gate";
    public static final String FIELD_PRICE = "price";
    public static final String FIELD_STATUS = "status";
    public static final String FIELD_RCODE = "route_code";
    public static final String FIELD_APLATE = "airplane_plate";
    public static final String FIELD_STO = "stopover";
    public static final String FIELD_BAGID = "baggage_id";
    public static final String FIELD_DESCRIPTION = "description";
    public static final String FIELD_TITLE = "title";
    public static final String FIELD_DAY = "day";
    public static final String FIELD_MONTH = "month";
    public static final String FIELD_YEAR = "year";
    public static final String FIELD_DISCOUNT = "discount";
    public static final String FIELD_NAME = "name";
    public static final String FIELD_ORIGIN = "origin";
    public static final String FIELD_DESTINATION = "destination";
    public static final String FIELD_HOUR = "hours";
    public static final String FIELD_MINUTES = "minutes";
    public static final String FIELD_EMAIL = "email";
    public static final String FIELD_FNAME = "first_name";
    public static final String FIELD_SNAME = "second_name";
    public static final String FIELD_FSNAME = "first_surname";
    public static final String FIELD_SSNAME = "second_surname";
    public static final String FIELD_PHONE = "phone";
    public static final String FIELD_UNIVERSITY = "university";
    public static final String FIELD_STID = "student_id";
    public static final String FIELD_RNAME = "role_name";


    public static final String CREATE_AIRPLANE_TABLE = "CREATE TABLE "+TABLE_AIRPLANE+" ("+FIELD_PLATE+" TEXT, "+FIELD_MODEL+" TEXT)";
    public static final String CREATE_APTO_TABLE = "CREATE TABLE "+TABLE_APTO+" ("+FIELD_FID+" INTEGER, "+FIELD_PCODE+" INTEGER, "+FIELD_FPRICE+" INTEGER)";
    public static final String CREATE_BAGGAGE_TABLE = "CREATE TABLE "+TABLE_BAGGAGE+" ("+FIELD_ID+" INTEGER, "+FIELD_COLOR+" TEXT, "+FIELD_WEIGHT+" INTEGER)";
    public static final String CREATE_BOOKS_TABLE = "CREATE TABLE "+TABLE_BOOKS+" ("+FIELD_UID+" INTEGER, "+FIELD_FID+" INTEGER)";
    public static final String CREATE_FLIGHTS_TABLE = "CREATE TABLE "+TABLE_FLIGHTS+" ("+FIELD_ID+" INTEGER, "+FIELD_BGATE+" INTEGER, "+FIELD_PRICE+" INTEGER, "+FIELD_STATUS+" BOOLEAN, "+FIELD_RCODE+" INTEGER, "+FIELD_APLATE+" TEXT)";
    public static final String CREATE_FLIGHTSTO_TABLE = "CREATE TABLE "+TABLE_FLIGHTSTO+" ("+FIELD_FID+" INTEGER, "+FIELD_STO+" TEXT)";
    public static final String CREATE_HAS_TABLE = "CREATE TABLE "+TABLE_HAS+" ("+FIELD_BAGID+" INTEGER, "+FIELD_UID+" INTEGER, "+FIELD_PRICE+" INTEGER)";
    public static final String CREATE_PROMOTION_TABLE = "CREATE TABLE "+TABLE_PROMOTION+" ("+FIELD_PCODE+" INTEGER, "+FIELD_DESCRIPTION+" TEXT, "+FIELD_TITLE+" TEXT, "+FIELD_DAY+" INTEGER, "+FIELD_MONTH+" INTEGER, "+FIELD_YEAR+" INTEGER, "+FIELD_DISCOUNT+" INTEGER)";
    public static final String CREATE_ROLE_TABLE = "CREATE TABLE "+TABLE_ROLE+" ("+FIELD_NAME+" TEXT, "+FIELD_DESCRIPTION+" TEXT)";
    public static final String CREATE_ROUTE_TABLE = "CREATE TABLE "+TABLE_ROUTE+" ("+FIELD_RCODE+" INTEGER, "+FIELD_ORIGIN+" TEXT, "+FIELD_DESTINATION+" TEXT, "+FIELD_YEAR+" INTEGER, "+FIELD_MONTH+" INTEGER, "+FIELD_DAY+" INTEGER, "+FIELD_HOUR+" INTEGER, "+FIELD_MINUTES+" INTEGER)";
    public static final String CREATE_SEATS_TABLE = "CREATE TABLE "+TABLE_SEATS+" ("+FIELD_ID+" INTEGER, "+FIELD_DESCRIPTION+" TEXT, state BOOLEAN, "+FIELD_UID+" INTEGER, "+FIELD_APLATE+" TEXT)";
    public static final String CREATE_USER_TABLE = "CREATE TABLE "+TABLE_USER+" ("+FIELD_ID+" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "+FIELD_EMAIL+" TEXT, "+FIELD_FNAME+" TEXT, "+FIELD_SNAME+" TEXT, "+FIELD_FSNAME+" TEXT, "+FIELD_SSNAME+" TEXT, "+FIELD_PHONE+" INTEGER, "+FIELD_UNIVERSITY+" TEXT, "+FIELD_STID+" INTEGER, "+FIELD_RNAME+" TEXT)";

}
