package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Promotion;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

/**
 * Interface for connection to the API, for the promotions class
 * @author Dennis Jimenez
 */
public interface PromotionAPI {

    @GET("api/Promotion")
    Call<List<Promotion>> findP();
}
