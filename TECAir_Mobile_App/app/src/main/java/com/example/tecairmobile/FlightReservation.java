package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class FlightReservation extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flight_reservation);
    }

    public void onClick(View view) {
        Intent myintent = new Intent(FlightReservation.this,MainMenu.class);
        startActivity(myintent);
    }
}