package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.example.tecairmobile.Interfaces.FlightsandroutesAPI;
import com.example.tecairmobile.Interfaces.PromotionAPI;
import com.example.tecairmobile.Interfaces.SeatAPI;
import com.example.tecairmobile.Interfaces.UserAPI;
import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.FlightsandRoutes;
import com.example.tecairmobile.entities.Promotion;
import com.example.tecairmobile.entities.Seats;
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
            sincSeat();
            sincFAR();
        }
    }

    private void sincFAR(){
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        FlightsandroutesAPI flightsandroutesAPI = retrofit.create(FlightsandroutesAPI.class);
        Call<List<FlightsandRoutes>> call = flightsandroutesAPI.findFAR();
        call.enqueue(new Callback<List<FlightsandRoutes>>() {
            @Override
            public void onResponse(Call<List<FlightsandRoutes>> call, Response<List<FlightsandRoutes>> response) {
                try{
                    List<FlightsandRoutes> flightsandRoutesList = response.body();
                    for(FlightsandRoutes far: flightsandRoutesList){
                        SQLiteDatabase db = conn.getWritableDatabase();
                        ContentValues values = new ContentValues();
                        values.put(Utilities.FIELD_ID, far.getId());
                        values.put(Utilities.FIELD_BGATE, far.getBoarding_gate());
                        values.put(Utilities.FIELD_PRICE, far.getPrice());
                        values.put(Utilities.FIELD_STATUS, far.isStatus());
                        values.put(Utilities.FIELD_RCODE, far.getRoute_code());
                        values.put(Utilities.FIELD_APLATE, far.getAirplane_plate());
                        values.put(Utilities.FIELD_ORIGIN, far.getOrigin());
                        values.put(Utilities.FIELD_DESTINATION, far.getDestination());
                        values.put(Utilities.FIELD_YEAR, far.getYear());
                        values.put(Utilities.FIELD_MONTH, far.getMonth());
                        values.put(Utilities.FIELD_DAY, far.getDay());
                        values.put(Utilities.FIELD_HOUR, far.getHours());
                        values.put(Utilities.FIELD_MINUTES, far.getMinutes());
                        values.put(Utilities.FIELD_PCODE, far.getPromotion_code());
                        values.put(Utilities.FIELD_FID, far.getFlight_id());
                        values.put(Utilities.FIELD_FPRICE, far.getFinal_price());

                        db.insert(Utilities.TABLE_FAR, null, values);
                        db.close();


                    }

                }catch (Exception ex){
                    Toast.makeText(intro.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<FlightsandRoutes>> call, Throwable t) {
                Toast.makeText(intro.this,"Connection Error",Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void sincSeat() {
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        SeatAPI seatAPI = retrofit.create(SeatAPI.class);
        Call<List<Seats>> call = seatAPI.findS();
        call.enqueue(new Callback<List<Seats>>() {
            @Override
            public void onResponse(Call<List<Seats>> call, Response<List<Seats>> response) {
                 try{
                     List<Seats> seatsList = response.body();
                     for(Seats s: seatsList){
                         SQLiteDatabase db = conn.getWritableDatabase();
                         ContentValues values = new ContentValues();
                         values.put(Utilities.FIELD_ID, s.getId());
                         values.put(Utilities.FIELD_DESCRIPTION, s.getDescription());
                         values.put(Utilities.FIELD_STATUS, s.isState());
                         values.put(Utilities.FIELD_UID, s.getUser_id());
                         values.put(Utilities.FIELD_APLATE, s.getAirplane_plate());

                         db.insert(Utilities.TABLE_SEATS, null, values);
                         db.close();
                     }
                 }catch (Exception ex){
                     Toast.makeText(intro.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                 }
            }

            @Override
            public void onFailure(Call<List<Seats>> call, Throwable t) {
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