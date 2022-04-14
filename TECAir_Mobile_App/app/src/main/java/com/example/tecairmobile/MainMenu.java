package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainMenu extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu);
    }

    public void onClick(View view){

        Intent myintent = null;

        switch(view.getId()){
            case R.id.toFlights:
                myintent = new Intent(MainMenu.this,flightSearch.class);
                break;
            case R.id.discounts:
                myintent = new Intent(MainMenu.this, ShowDiscounts.class);
                break;
        }
        startActivity(myintent);

    }
}