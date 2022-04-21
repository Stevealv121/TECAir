package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Promotion;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface PromotionAPI {

    @GET("api/Promotion")
    Call<List<Promotion>> findP();
}
