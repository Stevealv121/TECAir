package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Promotion;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface PromotionAPI {

    @GET("api/Promotion/{id}")
    static Call<Promotion> find(@Path("id") int id) {
        return null;
    }
}
