package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.tecairmobile.Interfaces.SeatAPI;
import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.FlightsandRoutes;
import com.example.tecairmobile.entities.Seats;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * This class manages the process of acquiring a ticket
 * @author Dennis Jimenez
 */
public class FlightReservation extends AppCompatActivity {

    TextView fprice;
    EditText card;
    Button pay;
    SQLitehelper conn;
    Spinner seats;
    ArrayList<Seats> seatList;
    ArrayList<Seats> fseatList;
    ArrayList<String> showSeats;
    FlightsandRoutes far;
    int index,id;

    /**
     * On create method, launches the moment this activity is used.
     * This method is used as a setup for all elements in the activity
     * @param savedInstanceState Bundle
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flight_reservation);

        conn = new SQLitehelper(getApplicationContext(),"TecAir_BD",null,1);

        fprice = findViewById(R.id.fprice);
        seats = findViewById(R.id.seats);
        card = findViewById(R.id.card);
        pay = findViewById(R.id.pay);

        Bundle object = getIntent().getExtras();
        far = (FlightsandRoutes) object.getSerializable("far");

        fprice.setText("Ticket Price (With discounts applied if available): "+"$"+far.getFinal_price().toString());

        consultS();

        ArrayAdapter<CharSequence> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item,showSeats);
        seats.setAdapter(adapter);
        seats.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            /**
             * Method tied to spinner, detects items selected
             * @param adapterView Adapter tied to spinner
             * @param view Spinner view
             * @param i Index
             * @param l Total of elements
             */
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                if(i!=0){
                    index = i;
                    card.setVisibility(View.VISIBLE);
                    pay.setVisibility(View.VISIBLE);
                }

                else{
                    card.setVisibility(View.INVISIBLE);
                    pay.setVisibility(View.INVISIBLE);
                }
            }

            /**
             * Only used if no item is selected for any reason
             * @param adapterView Adapter
             */
            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    /**
     * Method tasked with obtaining all seats from the SQLite database
     */
    private void consultS() {
        SQLiteDatabase db = conn.getReadableDatabase();
        Seats seats;
        seatList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT * FROM "+ Utilities.TABLE_SEATS,null);

        while(cursor.moveToNext()){
            boolean value = cursor.getInt(2) > 0;
            seats = new Seats();
            seats.setId(cursor.getInt(0));
            seats.setDescription(cursor.getString(1));
            seats.setState(value);
            seats.setUser_id(cursor.getInt(3));
            seats.setAirplane_plate(cursor.getString(4));

            seatList.add(seats);
        }
        db.close();
        getFListS(far.getAirplane_plate());

    }

    /**
     * Filters the list of seats so only the ones with the selected airplane plate are shown
     * @param a_plate String with the airplane plate
     */
    private void getFListS(String a_plate) {
        fseatList =new ArrayList<>();
        for(int i=0; i<seatList.size();i++){
            if(seatList.get(i).getAirplane_plate().equals(a_plate) && seatList.get(i).isState()){
                fseatList.add(seatList.get(i));
            }
        }
        getListS();
    }

    /**
     * Method tasked with creating a list of strings for the spinner to show
     */
    private void getListS() {
        showSeats = new ArrayList<>();
        showSeats.add("Please select your seat");
        for(int i=0;i<fseatList.size();i++){
            showSeats.add("Seat Number: "+fseatList.get(i).getId()+" - "+fseatList.get(i).getDescription());
        }
    }

    /**
     * Method tied to the button on screen
     * @param view Button view
     */
    public void onClick(View view) {
        updateT();
        createOBJ();
        Intent myintent = new Intent(FlightReservation.this,MainMenu.class);
        myintent.putExtra("id",id);
        startActivity(myintent);
    }

    /**
     * Updates the local database so the seat is truly reserved
     */
    private void updateT() {
        Intent rintent = getIntent();
        id = rintent.getIntExtra("id",0);
        SQLiteDatabase db = conn.getWritableDatabase();
        String[] param = {fseatList.get(index-1).getId().toString()};
        ContentValues values = new ContentValues();
        values.put(Utilities.FIELD_STATUS, false);
        values.put(Utilities.FIELD_UID,id);

        db.update(Utilities.TABLE_SEATS,values,Utilities.FIELD_ID+"=?",param);
        db.close();
    }

    /**
     * Creates an object to send to the API as an update
     */
    private void createOBJ() {
        SQLiteDatabase db = conn.getReadableDatabase();
        Seats seats;
        String[] consult = {fseatList.get(index-1).getId().toString()};
        String[] result = {Utilities.FIELD_ID, Utilities.FIELD_DESCRIPTION, Utilities.FIELD_STATUS, Utilities.FIELD_UID, Utilities.FIELD_APLATE};
        try{
            Cursor cursor = db.query(Utilities.TABLE_SEATS,result,Utilities.FIELD_ID+"=?",consult,null,null,null);
            cursor.moveToFirst();
            boolean value = cursor.getInt(2) > 0;
            seats = new Seats();
            seats.setId(cursor.getInt(0));
            seats.setDescription(cursor.getString(1));
            seats.setState(value);
            seats.setUser_id(cursor.getInt(3));
            seats.setAirplane_plate(cursor.getString(4));
            updateDB(seats);
        }catch(Exception e){
            Toast.makeText(getApplicationContext(),"Error in object", Toast.LENGTH_LONG).show();
        }
    }

    /**
     * Calls retrofit and updates the Seat object selected on the API
     * @param seats Object Seats
     */
    private void updateDB(Seats seats){
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        SeatAPI seatAPI = retrofit.create(SeatAPI.class);
        Call<Seats> call = seatAPI.update(seats);
        call.enqueue(new Callback<Seats>() {
            @Override
            public void onResponse(Call<Seats> call, Response<Seats> response) {
                Toast.makeText(FlightReservation.this,"Ticket Purchased, thank you for choosing TecAir",Toast.LENGTH_LONG).show();
            }

            @Override
            public void onFailure(Call<Seats> call, Throwable t) {
                Toast.makeText(getApplicationContext(),"Error updating", Toast.LENGTH_LONG).show();
            }
        });
    }
}