package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.FlightsandRoutes;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface FlightsandroutesAPI {

    @GET("api/Flight/FlightsandRoutes")
    Call<List<FlightsandRoutes>>findFAR();

}
