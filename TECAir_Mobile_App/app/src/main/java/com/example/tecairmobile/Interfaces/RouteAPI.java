package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Route;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface RouteAPI {

    @GET("api/Route")
    Call<List<Route>> findR();
}
