package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Applies_to;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface Applies_toAPI {

    @GET("api/AppliesTo")
    Call<List<Applies_to>> findAPT();
}
