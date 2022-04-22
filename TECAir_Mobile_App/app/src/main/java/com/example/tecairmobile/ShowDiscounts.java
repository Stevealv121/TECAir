package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

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

import com.example.tecairmobile.Interfaces.PromotionAPI;
import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.Promotion;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ShowDiscounts extends AppCompatActivity {

    Spinner desc;
    TextView p1,p2,p3,p4;
    ArrayList<String> desclist;
    ArrayList<Promotion> promList;

    SQLitehelper conn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_show_discounts);

        conn = new SQLitehelper(getApplicationContext(),"TecAir_BD",null,1);

        desc = findViewById(R.id.desc);
        p1= findViewById(R.id.p1);
        p2= findViewById(R.id.p2);
        p3= findViewById(R.id.p3);
        p4= findViewById(R.id.p4);

        consult();

        ArrayAdapter<CharSequence> adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item,desclist);
        desc.setAdapter(adapter);

        desc.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {

                if(i!=0){
                    p1.setText("Promotion Code: " + promList.get(i-1).getPromotioncode());
                    p2.setText("Title: " + promList.get(i-1).getTitle());
                    p3.setText("Valid Until: " + promList.get(i-1).getDay() + "/"+ promList.get(i-1).getMonth() + "/" + promList.get(i-1).getYear());
                    p4.setText("Discount: " + promList.get(i-1).getDiscount() + "%");

                }
                else{
                    p1.setText("");
                    p2.setText("");
                    p3.setText("");
                    p4.setText("");
                }
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    private void consult() {
        SQLiteDatabase db = conn.getReadableDatabase();

        Promotion promotion;
        promList = new ArrayList<>();

        Cursor cursor = db.rawQuery("Select * FROM "+ Utilities.TABLE_PROMOTION,null);

        while(cursor.moveToNext()){
            promotion = new Promotion();
            promotion.setPromotioncode(cursor.getInt(0));
            promotion.setDescription(cursor.getString(1));
            promotion.setTitle(cursor.getString(2));
            promotion.setDay(cursor.getInt(3));
            promotion.setMonth(cursor.getInt(4));
            promotion.setYear(cursor.getInt(5));
            promotion.setDiscount(cursor.getInt(6));

            promList.add(promotion);
        }
        getlist();
    }

    private void getlist() {
        desclist = new ArrayList<>();
        desclist.add("Select an available Promotion");
        for(int i=0; i<promList.size();i++){
            desclist.add(promList.get(i).getDescription());
        }
    }
}