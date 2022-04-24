package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class MainMenu extends AppCompatActivity {

    int id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_menu);
    }

    public void onClick(View view){

        Intent myintent = null;
        Intent rintent = getIntent();
        id = rintent.getIntExtra("id",0);
        switch(view.getId()){
            case R.id.booking:
                myintent = new Intent(MainMenu.this,flightSearch.class);
                myintent.putExtra("id",id);
                break;
            case R.id.discounts:
                myintent = new Intent(MainMenu.this, ShowDiscounts.class);
                break;
        }
        Toast.makeText(MainMenu.this,"Current User: "+id,Toast.LENGTH_LONG).show();
        startActivity(myintent);

    }
}