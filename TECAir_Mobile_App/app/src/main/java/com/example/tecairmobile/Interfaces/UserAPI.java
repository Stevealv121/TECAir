package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface UserAPI {

    @GET("api/User")
    Call<List<User>> findU();
}
