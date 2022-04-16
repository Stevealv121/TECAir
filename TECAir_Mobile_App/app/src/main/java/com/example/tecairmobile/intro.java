package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class intro extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intro);
    }

    public void onClick(View view) {
        Intent myintent = null;

        switch(view.getId()){
            case R.id.Login:
                myintent = new Intent(intro.this,Login.class);
                break;
            case R.id.SignUp:
                myintent = new Intent(intro.this, Registration.class);
                break;
        }
        startActivity(myintent);
    }
}