package com.example.tecairmobile.Interfaces;

import com.example.tecairmobile.entities.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
/**
 * Interface for connection to the API, for the User class
 * @author Dennis Jimenez
 */
public interface UserAPI {

    @GET("api/User")
    Call<List<User>> findU();

    @POST("api/User")
    Call<User> postUser(@Body User user);
}
