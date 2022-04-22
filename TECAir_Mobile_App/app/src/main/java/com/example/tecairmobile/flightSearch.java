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
import com.example.tecairmobile.entities.Promotion;
import com.example.tecairmobile.entities.Route;

import java.util.ArrayList;
import java.util.List;

public class flightSearch extends AppCompatActivity {

    TextView f1,f2,f3,f4,f5;
    Spinner routes, flights;
    ArrayList<String> showRoutes;
    ArrayList<String> showFlights;
    ArrayList<Route> routeList;
    ArrayList<Flight> flightList;
    ArrayList<Flight> finalFlightlist;
    SQLitehelper conn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flight);

        conn = new SQLitehelper(getApplicationContext(),"TecAir_BD",null,1);

        routes = findViewById(R.id.routes);
        flights = findViewById(R.id.flights);
        f1= findViewById(R.id.f1);
        f2= findViewById(R.id.f2);
        f3= findViewById(R.id.f3);
        f4= findViewById(R.id.f4);
        f5= findViewById(R.id.f5);

        consultR();

        ArrayAdapter<CharSequence> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item,showRoutes);
        routes.setAdapter(adapter);
        routes.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {

                if(i!=0){
                    f1.setVisibility(View.VISIBLE);
                    f2.setVisibility(View.VISIBLE);
                    f3.setVisibility(View.VISIBLE);
                    f4.setVisibility(View.VISIBLE);
                    f5.setVisibility(View.VISIBLE);
                    flights.setVisibility(View.VISIBLE);
                }
                else{
                    f1.setText("");
                    f2.setText("");
                    f3.setText("");
                    f4.setText("");
                    f5.setText("");
                    flights.setVisibility(View.INVISIBLE);
                    f1.setVisibility(View.INVISIBLE);
                    f2.setVisibility(View.INVISIBLE);
                    f3.setVisibility(View.INVISIBLE);
                    f4.setVisibility(View.INVISIBLE);
                    f5.setVisibility(View.INVISIBLE);
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    private void consultR() {
        SQLiteDatabase db = conn.getReadableDatabase();
        Route route;
        routeList = new ArrayList<>();
        Cursor cursor = db.rawQuery("SELECT * FROM " + Utilities.TABLE_ROUTE,null);

        while(cursor.moveToNext()){
            route = new Route();
            route.setRoute_code(cursor.getInt(0));
            route.setOrigin(cursor.getString(1));
            route.setDestination(cursor.getString(2));
            route.setYear(cursor.getInt(3));
            route.setMonth(cursor.getInt(4));
            route.setDay(cursor.getInt(5));
            route.setHours(cursor.getInt(6));
            route.setMinutes(cursor.getInt(7));

            routeList.add(route);

        }
        db.close();
        getlistR();
    }

    private void getlistR() {
        showRoutes = new ArrayList<>();
        showRoutes.add("Select Route");
        for(int i=0; i<routeList.size();i++){
            showRoutes.add(routeList.get(i).getOrigin()+"-"+routeList.get(i).getDestination());
        }
    }

    public void onClick(View view) {
        Intent myintent = new Intent(flightSearch.this,FlightReservation.class);
        startActivity(myintent);
    }
}