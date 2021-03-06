package com.example.tecairmobile;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import com.example.tecairmobile.Utilities.Utilities;
/**
 * This class manages the process of creating the SQLite database
 * @author Dennis Jimenez
 */
public class SQLitehelper extends SQLiteOpenHelper {
    /**
     * SQLite constructor
     * @param context aplication context
     * @param name name of the database
     * @param factory factory
     * @param version version of the database
     */
    public SQLitehelper(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
    }

    /**
     * On create method used to set up the database
     * @param db Database
     */
    @Override
    public void onCreate(SQLiteDatabase db) {

        db.execSQL(Utilities.CREATE_AIRPLANE_TABLE);
        db.execSQL(Utilities.CREATE_APTO_TABLE);
        db.execSQL(Utilities.CREATE_BAGGAGE_TABLE);
        db.execSQL(Utilities.CREATE_BOOKS_TABLE);
        db.execSQL(Utilities.CREATE_FLIGHTS_TABLE);
        db.execSQL(Utilities.CREATE_FLIGHTSTO_TABLE);
        db.execSQL(Utilities.CREATE_HAS_TABLE);
        db.execSQL(Utilities.CREATE_PROMOTION_TABLE);
        db.execSQL(Utilities.CREATE_ROLE_TABLE);
        db.execSQL(Utilities.CREATE_ROUTE_TABLE);
        db.execSQL(Utilities.CREATE_SEATS_TABLE);
        db.execSQL(Utilities.CREATE_USER_TABLE);
        db.execSQL(Utilities.CREATE_FAR_TABLE);

    }

    /**
     * On upgrade used to drop the tables if the version is updated
     * @param db database
     * @param iv old version
     * @param nv new version
     */
    @Override
    public void onUpgrade(SQLiteDatabase db, int iv, int nv) {
        db.execSQL("DROP TABLE IF EXISTS airplanes");
        db.execSQL("DROP TABLE IF EXISTS applies_to");
        db.execSQL("DROP TABLE IF EXISTS baggage");
        db.execSQL("DROP TABLE IF EXISTS books");
        db.execSQL("DROP TABLE IF EXISTS flights");
        db.execSQL("DROP TABLE IF EXISTS stopovers");
        db.execSQL("DROP TABLE IF EXISTS has");
        db.execSQL("DROP TABLE IF EXISTS promotions");
        db.execSQL("DROP TABLE IF EXISTS role");
        db.execSQL("DROP TABLE IF EXISTS route");
        db.execSQL("DROP TABLE IF EXISTS seats");
        db.execSQL("DROP TABLE IF EXISTS user");
        db.execSQL("DROP TABLE IF EXISTS flights_and_routes");
        onCreate(db);

    }
}
