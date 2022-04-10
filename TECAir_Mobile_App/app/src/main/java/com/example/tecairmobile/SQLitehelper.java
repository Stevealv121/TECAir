package com.example.tecairmobile;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class SQLitehelper extends SQLiteOpenHelper {

    final String CREATE_AIRPLANE_TABLE = "CREATE TABLE airplanes (plate TEXT, model TEXT)";
    final String CREATE_APTO_TABLE = "CREATE TABLE applies_to (flight_id INTEGER, promotion_code INTEGER, final_price INTEGER)";
    final String CREATE_BAGGAGE_TABLE = "CREATE TABLE baggage (id INTEGER, color TEXT, weight INTEGER)";
    final String CREATE_BOOKS_TABLE = "CREATE TABLE books (user_id INTEGER, flight_id INTEGER)";
    final String CREATE_FLIGHTS_TABLE = "CREATE TABLE flights (id INTEGER, boarding_gate INTEGER, price INTEGER, status BOOLEAN, route_code INTEGER, airplane_plate TEXT)";
    final String CREATE_FLIGHTSTO_TABLE = "CREATE TABLE stopover (flight_id INTEGER, stopover TEXT)";
    final String CREATE_HAS_TABLE = "CREATE TABLE has (baggage_id INTEGER, user_id INTEGER, price INTEGER)";
    final String CREATE_PROMOTION_TABLE = "CREATE TABLE promotions (promotion_code INTEGER, description TEXT, title TEXT, day INTEGER, month INTEGER, year INTEGER, discount INTEGER)";
    final String CREATE_ROLE_TABLE = "CREATE TABLE role (name TEXT, description TEXT)";
    final String CREATE_ROUTE_TABLE = "CREATE TABLE route (route_code INTEGER, origin TEXT, destination TEXT, year INTEGER, month INTEGER, day INTEGER, hours INTEGER, minutes INTEGER)";
    final String CREATE_SEATS_TABLE = "CREATE TABLE seats (id INTEGER, description TEXT, state BOOLEAN, user_id INTEGER, airplane_plate TEXT)";
    final String CREATE_USER_TABLE = "CREATE TABLE user (id INTEGER, email TEXT, first_name TEXT, second_name TEXT, first_surname TEXT, second_surname TEXT, phone INTEGER, university TEXT, student_id INTEGER, role_name TEXT)";

    public SQLitehelper(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        db.execSQL(CREATE_AIRPLANE_TABLE);
        db.execSQL(CREATE_APTO_TABLE);
        db.execSQL(CREATE_BAGGAGE_TABLE);
        db.execSQL(CREATE_BOOKS_TABLE);
        db.execSQL(CREATE_FLIGHTS_TABLE);
        db.execSQL(CREATE_FLIGHTSTO_TABLE);
        db.execSQL(CREATE_HAS_TABLE);
        db.execSQL(CREATE_PROMOTION_TABLE);
        db.execSQL(CREATE_ROLE_TABLE);
        db.execSQL(CREATE_ROUTE_TABLE);
        db.execSQL(CREATE_SEATS_TABLE);
        db.execSQL(CREATE_USER_TABLE);

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int iv, int nv) {
        db.execSQL("DROP TABLE IF EXISTS airplanes");
        db.execSQL("DROP TABLE IF EXISTS applies_to");
        db.execSQL("DROP TABLE IF EXISTS baggage");
        db.execSQL("DROP TABLE IF EXISTS books");
        db.execSQL("DROP TABLE IF EXISTS flights");
        db.execSQL("DROP TABLE IF EXISTS stopover");
        db.execSQL("DROP TABLE IF EXISTS has");
        db.execSQL("DROP TABLE IF EXISTS promotions");
        db.execSQL("DROP TABLE IF EXISTS role");
        db.execSQL("DROP TABLE IF EXISTS route");
        db.execSQL("DROP TABLE IF EXISTS seats");
        db.execSQL("DROP TABLE IF EXISTS user");
        onCreate(db);

    }
}
