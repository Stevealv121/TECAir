package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.Flight;
import com.example.tecairmobile.entities.FlightsandRoutes;
import com.example.tecairmobile.entities.Promotion;
import com.example.tecairmobile.entities.Route;

import java.util.ArrayList;
import java.util.List;

public class flightSearch extends AppCompatActivity {

    TextView f1,f2,f3,f4,f5;
    Spinner routes;
    ArrayList<String> showRoutes;
    ArrayList<FlightsandRoutes> farList;
    int uindex, id;
    SQLitehelper conn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flight);

        conn = new SQLitehelper(getApplicationContext(),"TecAir_BD",null,1);

        routes = findViewById(R.id.routes);
        f1= findViewById(R.id.f1);
        f2= findViewById(R.id.f2);
        f3= findViewById(R.id.f3);
        f4= findViewById(R.id.f4);
        f5= findViewById(R.id.f5);
        consultFAR();

        ArrayAdapter<CharSequence> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item,showRoutes);
        routes.setAdapter(adapter);
        routes.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {

                if(i!=0){
                    uindex = i;
                    f1.setText("Flight ID: " + farList.get(i-1).getFlight_id());
                    f2.setText("Boarding Gate: " + farList.get(i-1).getBoarding_gate());
                    f3.setText("Flight Date: " + farList.get(i-1).getDay() + "/" + farList.get(i-1).getMonth() + "/" + farList.get(i-1).getYear());
                    f4.setText("Departure at: "+farList.get(i-1).getHours() + ":" + farList.get(i-1).getMinutes());
                    f5.setText("Airplane Plate: " + farList.get(i-1).getAirplane_plate());

                }

                else{
                    f1.setText("");
                    f2.setText("");
                    f3.setText("");
                    f4.setText("");
                    f5.setText("");
                }

            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    private void consultFAR() {
        SQLiteDatabase db = conn.getReadableDatabase();
        FlightsandRoutes far;
        farList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT * FROM " + Utilities.TABLE_FAR,null);

        while(cursor.moveToNext()){
            boolean value = cursor.getInt(3) > 0;
            far = new FlightsandRoutes();

            far.setId(cursor.getInt(0));
            far.setBoarding_gate(cursor.getInt(1));
            far.setPrice(cursor.getInt(2));
            far.setStatus(value);
            far.setRoute_code(cursor.getInt(4));
            far.setAirplane_plate(cursor.getString(5));
            far.setOrigin(cursor.getString(6));
            far.setDestination(cursor.getString(7));
            far.setYear(cursor.getInt(8));
            far.setMonth(cursor.getInt(9));
            far.setDay(cursor.getInt(10));
            far.setHours(cursor.getInt(11));
            far.setMinutes(cursor.getString(12));
            far.setPromotion_code(cursor.getInt(13));
            far.setFlight_id(cursor.getInt(14));
            far.setFinal_price(cursor.getInt(15));
            far.setDuration(cursor.getString(16));

            farList.add(far);

        }
        db.close();
        getlistR();
    }

    private void getlistR() {
        showRoutes = new ArrayList<>();
        showRoutes.add("Select Route");
        for(int i=0; i<farList.size();i++){
            showRoutes.add(farList.get(i).getOrigin()+"-"+farList.get(i).getDestination());
        }
    }

    public void onClick(View view) {
        if(f1.getText()==""){
            Toast.makeText(flightSearch.this,"Please select flight",Toast.LENGTH_LONG).show();
        }else{
            Intent rintent = getIntent();
            id = rintent.getIntExtra("id",0);
            FlightsandRoutes far = farList.get(uindex-1);
            Intent myintent = new Intent(flightSearch.this,FlightReservation.class);
            Bundle bundle = new Bundle();
            bundle.putSerializable("far",far);
            myintent.putExtras(bundle);
            myintent.putExtra("id",id);
            startActivity(myintent);
        }
    }
}