package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.tecairmobile.Interfaces.UserAPI;
import com.example.tecairmobile.Utilities.Utilities;
import com.example.tecairmobile.entities.User;

import java.util.Arrays;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Registration extends AppCompatActivity {

    EditText name, mail, college, studentID,secondname,firstsurname,secondsurname,pass,id;
    Spinner student;
    String role;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);

        name = (EditText) findViewById(R.id.name);
        mail = (EditText) findViewById(R.id.mail);
        college = (EditText) findViewById(R.id.college);
        studentID = (EditText) findViewById(R.id.studentID);
        secondname = (EditText) findViewById(R.id.secondname);
        firstsurname = (EditText) findViewById(R.id.password);
        secondsurname = (EditText) findViewById(R.id.secondsurname);
        pass = (EditText) findViewById(R.id.pass);
        id = (EditText) findViewById(R.id.id);
        student = findViewById(R.id.student);

        List<String> states = Arrays.asList("Client","Student");
        ArrayAdapter adapter = new ArrayAdapter(getApplicationContext(), android.R.layout.simple_spinner_item,states);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        student.setAdapter(adapter);

        student.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                String state = student.getSelectedItem().toString();
                if(state.equals("Client")){
                    role = "Client";
                    college.setVisibility(View.INVISIBLE);
                    studentID.setVisibility(View.INVISIBLE);
                }
                else{
                    role = "Client";
                    college.setVisibility(View.VISIBLE);
                    studentID.setVisibility(View.VISIBLE);
                }
            }
            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    public void onClick(View view){
        createObject();
        singUserUp();
        Intent myintent = new Intent(Registration.this,intro.class);
        startActivity(myintent);

    }

    private void createObject() {
        User user;
        user = new User();
        if(role.equals("Client")){
            user.setId(Integer.parseInt(id.getText().toString()));
            user.setFirst_name(name.getText().toString());
            user.setSecond_name(secondname.getText().toString());
            user.setFirst_surname(firstsurname.getText().toString());
            user.setSecond_surname(secondsurname.getText().toString());
            user.setEmail(mail.getText().toString());
            user.setUniversity(null);
            user.setStudent_id(null);
            user.setRole_name(role);
            user.setPassword(pass.getText().toString());
            user.setPhone(1);
            posttodb(user);
        }else{
            user.setId(Integer.parseInt(id.getText().toString()));
            user.setFirst_name(name.getText().toString());
            user.setSecond_name(secondname.getText().toString());
            user.setFirst_surname(firstsurname.getText().toString());
            user.setSecond_surname(secondsurname.getText().toString());
            user.setEmail(mail.getText().toString());
            user.setUniversity(college.getText().toString());
            user.setStudent_id(Integer.parseInt(studentID.getText().toString()));
            user.setRole_name(role);
            user.setPassword(pass.getText().toString());
            user.setPhone(1);
            posttodb(user);
        }
    }

    private void posttodb(User user) {
        Retrofit retrofit = new Retrofit.Builder().baseUrl("http://10.0.2.2:5104/")
                .addConverterFactory(GsonConverterFactory.create()).build();
        UserAPI userAPI = retrofit.create(UserAPI.class);
        Call<User> call = userAPI.postUser(user);
        call.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                Toast.makeText(getApplicationContext(), "User Succesfully Added", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Request Error", Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void singUserUp(){
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);

        SQLiteDatabase db = conn.getWritableDatabase();

        ContentValues values = new ContentValues();
        values.put(Utilities.FIELD_ID, id.getText().toString());
        values.put(Utilities.FIELD_FNAME, name.getText().toString());
        values.put(Utilities.FIELD_SNAME, secondname.getText().toString());
        values.put(Utilities.FIELD_FSNAME, firstsurname.getText().toString());
        values.put(Utilities.FIELD_SSNAME, secondsurname.getText().toString());
        values.put(Utilities.FIELD_EMAIL, mail.getText().toString());
        values.put(Utilities.FIELD_UNIVERSITY, college.getText().toString());
        values.put(Utilities.FIELD_STID, studentID.getText().toString());
        values.put(Utilities.FIELD_RNAME,role);
        values.put(Utilities.FIELD_PASS, pass.getText().toString());

        db.insert(Utilities.TABLE_USER, Utilities.FIELD_ID, values);
        db.close();

    }
}