package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.example.tecairmobile.Interfaces.FlightsAPI;
import com.example.tecairmobile.Interfaces.PromotionAPI;
import com.example.tecairmobile.Interfaces.RouteAPI;
import com.example.tecairmobile.Interfaces.UserAPI;
import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.Flight;
import com.example.tecairmobile.entities.Promotion;
import com.example.tecairmobile.entities.Route;
import com.example.tecairmobile.entities.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class intro extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_intro);
        if(savedInstanceState == null){
            sincP();
            sincUser();
            sincFlight();
            sincRoute();
        }
    }

    private void sincRoute() {
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        RouteAPI routeAPI = retrofit.create(RouteAPI.class);
        Call<List<Route>> call = routeAPI.findR();
        call.enqueue(new Callback<List<Route>>() {
            @Override
            public void onResponse(Call<List<Route>> call, Response<List<Route>> response) {
                try{
                    List<Route> routeList = response.body();
                    for(Route r: routeList){
                        SQLiteDatabase db = conn.getWritableDatabase();
                        ContentValues values = new ContentValues();
                        values.put(Utilities.FIELD_RCODE, r.getRoute_code());
                        values.put(Utilities.FIELD_ORIGIN, r.getOrigin());
                        values.put(Utilities.FIELD_DESTINATION, r.getDestination());
                        values.put(Utilities.FIELD_YEAR, r.getYear());
                        values.put(Utilities.FIELD_MONTH, r.getMonth());
                        values.put(Utilities.FIELD_DAY, r.getDay());
                        values.put(Utilities.FIELD_HOUR, r.getHours());
                        values.put(Utilities.FIELD_MINUTES, r.getMinutes());

                        db.insert(Utilities.TABLE_ROUTE, null, values);
                        db.close();
                    }
                }catch (Exception ex){
                    Toast.makeText(intro.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }
            @Override
            public void onFailure(Call<List<Route>> call, Throwable t) {
                Toast.makeText(intro.this,"Connection Error",Toast.LENGTH_SHORT).show();
            }
        });

    }

    private void sincP() {
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        PromotionAPI promotionAPI = retrofit.create(PromotionAPI.class);
        Call<List<Promotion>> call = promotionAPI.findP();
        call.enqueue(new Callback<List<Promotion>>() {
            @Override
            public void onResponse(Call<List<Promotion>> call, Response<List<Promotion>> response) {
                try {
                    List<Promotion> promotionList = response.body();
                    for(Promotion p:promotionList){
                        SQLiteDatabase db = conn.getWritableDatabase();
                        ContentValues values = new ContentValues();
                        values.put(Utilities.FIELD_PCODE, p.getPromotioncode());
                        values.put(Utilities.FIELD_DESCRIPTION, p.getDescription());
                        values.put(Utilities.FIELD_TITLE, p.getTitle());
                        values.put(Utilities.FIELD_DAY, p.getDay());
                        values.put(Utilities.FIELD_MONTH, p.getMonth());
                        values.put(Utilities.FIELD_YEAR, p.getYear());
                        values.put(Utilities.FIELD_DISCOUNT, p.getDiscount());

                        db.insert(Utilities.TABLE_PROMOTION, null, values);
                        db.close();
                    }
                }catch (Exception ex){
                    Toast.makeText(intro.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Promotion>> call, Throwable t) {
                Toast.makeText(intro.this,"Connection Error",Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void sincFlight() {
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        FlightsAPI flightsAPI = retrofit.create(FlightsAPI.class);
        Call<List<Flight>> call = flightsAPI.findF();
        call.enqueue(new Callback<List<Flight>>() {
            @Override
            public void onResponse(Call<List<Flight>> call, Response<List<Flight>> response) {
                try{
                    List<Flight> flightList = response.body();
                    for(Flight f:flightList){
                        SQLiteDatabase db = conn.getWritableDatabase();
                        ContentValues values = new ContentValues();
                        values.put(Utilities.FIELD_ID, f.getId());
                        values.put(Utilities.FIELD_BGATE, f.getBoarding_gate());
                        values.put(Utilities.FIELD_PRICE, f.getPrice());
                        values.put(Utilities.FIELD_STATUS, f.isStatus());
                        values.put(Utilities.FIELD_RCODE, f.getRoute_code());
                        values.put(Utilities.FIELD_APLATE, f.getAirplane_plate());

                        db.insert(Utilities.TABLE_FLIGHTS, null, values);
                        db.close();

                    }

                }catch(Exception ex){
                    Toast.makeText(intro.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Flight>> call, Throwable t) {
                Toast.makeText(intro.this,"Connection Error",Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void sincUser() {
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        UserAPI userAPI = retrofit.create(UserAPI.class);
        Call<List<User>> call = userAPI.findU();
        call.enqueue(new Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
                try{
                    List<User> userList = response.body();
                    for(User u:userList){
                        SQLiteDatabase db = conn.getWritableDatabase();
                        ContentValues values = new ContentValues();
                        values.put(Utilities.FIELD_ID, u.getId());
                        values.put(Utilities.FIELD_FNAME, u.getFirst_name());
                        values.put(Utilities.FIELD_SNAME, u.getSecond_name());
                        values.put(Utilities.FIELD_FSNAME, u.getFirst_surname());
                        values.put(Utilities.FIELD_SSNAME, u.getSecond_surname());
                        values.put(Utilities.FIELD_PHONE, u.getPhone());
                        values.put(Utilities.FIELD_EMAIL, u.getEmail());
                        values.put(Utilities.FIELD_UNIVERSITY, u.getUniversity());
                        values.put(Utilities.FIELD_STID, u.getStudent_id());
                        values.put(Utilities.FIELD_RNAME, u.getRole_name());
                        values.put(Utilities.FIELD_PASS, u.getPassword());

                        db.insert(Utilities.TABLE_USER, null, values);
                        db.close();
                    }

                }catch(Exception ex){
                    Toast.makeText(intro.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                Toast.makeText(intro.this,"Connection Error",Toast.LENGTH_SHORT).show();
            }
        });
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