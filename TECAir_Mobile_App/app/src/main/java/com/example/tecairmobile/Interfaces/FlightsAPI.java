package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Flight;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface FlightsAPI {
    @GET("api/Flight")
    Call<List<Flight>> findF();
}
