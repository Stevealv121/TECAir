package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.tecairmobile.Interfaces.PromotionAPI;
import com.example.tecairmobile.entities.Promotion;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ShowDiscounts extends AppCompatActivity {

    EditText code;
    TextView description;
    Button pb1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_show_discounts);
        code = findViewById(R.id.code);
        description = findViewById(R.id.description);
        pb1 = findViewById(R.id.pb1);

        pb1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

            }
        });
    }

    /*private void find(int code){
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();

        PromotionAPI promotionAPI = retrofit.create(PromotionAPI.class);
        Call<Promotion> call = promotionAPI.find(code);
        call.enqueue(new Callback<Promotion>() {
            @Override
            public void onResponse(Call<Promotion> call, Response<Promotion> response) {

                try{
                    if(response.isSuccessful()){
                        Promotion p = response.body();
                        description.setText(p.getDescription());
                    }

                }catch (Exception ex){
                    Toast.makeText(ShowDiscounts.this,ex.getMessage(),Toast.LENGTH_SHORT).show();
                }

            }

            @Override
            public void onFailure(Call<Promotion> call, Throwable t) {
                Toast.makeText(ShowDiscounts.this,"Connection Error",Toast.LENGTH_SHORT).show();
            }
        });
    }*/
}