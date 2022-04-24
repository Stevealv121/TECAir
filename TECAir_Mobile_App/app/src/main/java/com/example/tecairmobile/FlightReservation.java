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

import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.FlightsandRoutes;
import com.example.tecairmobile.entities.Seats;

import java.util.ArrayList;

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
    int index;


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

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

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

    private void getFListS(String a_plate) {
        fseatList =new ArrayList<>();
        for(int i=0; i<seatList.size();i++){
            if(seatList.get(i).getAirplane_plate().equals(a_plate) && seatList.get(i).isState()){
                fseatList.add(seatList.get(i));
            }
        }
        getListS();
    }

    private void getListS() {
        showSeats = new ArrayList<>();
        showSeats.add("Please select your seat");
        for(int i=0;i<fseatList.size();i++){
            showSeats.add("Seat Number: "+fseatList.get(i).getId()+" - "+fseatList.get(i).getDescription());
        }
    }

    public void onClick(View view) {
        updateT();
        Intent myintent = new Intent(FlightReservation.this,MainMenu.class);
        startActivity(myintent);
    }

    private void updateT() {
        SQLiteDatabase db = conn.getWritableDatabase();
        String[] param = {fseatList.get(index-1).getId().toString()};
        ContentValues values = new ContentValues();
        values.put(Utilities.FIELD_STATUS, false);

        db.update(Utilities.TABLE_SEATS,values,Utilities.FIELD_ID+"=?",param);

        Toast.makeText(FlightReservation.this,"Ticket Purchased, thank you for choosing TecAir",Toast.LENGTH_LONG).show();
        db.close();
    }
}