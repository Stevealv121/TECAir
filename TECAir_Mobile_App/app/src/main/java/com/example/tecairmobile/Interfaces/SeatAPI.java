package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.Seats;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.PUT;

public interface SeatAPI {

    @GET("api/Seat")
    Call<List<Seats>> findS();

    @PUT("api/Seat")
    Call<Seats> update(@Body Seats seats);
}
