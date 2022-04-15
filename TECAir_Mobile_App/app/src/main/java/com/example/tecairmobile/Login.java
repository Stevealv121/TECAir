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

import com.example.tecairmobile.Utilities.Utilities;

import java.util.Arrays;
import java.util.List;

public class Login extends AppCompatActivity {

    EditText name, mail, college, studentID,secondname,firstsurname,secondsurname;
    Spinner student;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);

        name = (EditText) findViewById(R.id.name);
        mail = (EditText) findViewById(R.id.mail);
        college = (EditText) findViewById(R.id.college);
        studentID = (EditText) findViewById(R.id.studentID);
        secondname = (EditText) findViewById(R.id.secondname);
        firstsurname = (EditText) findViewById(R.id.firstsurname);
        secondsurname = (EditText) findViewById(R.id.secondsurname);
        student = findViewById(R.id.student);

        List<String> states = Arrays.asList("Regular","Student");
        ArrayAdapter adapter = new ArrayAdapter(getApplicationContext(), android.R.layout.simple_spinner_item,states);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        student.setAdapter(adapter);

        student.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                String state = student.getSelectedItem().toString();
                if(state == "Regular"){
                    college.setVisibility(View.INVISIBLE);
                    studentID.setVisibility(View.INVISIBLE);
                }
                else{
                    college.setVisibility(View.VISIBLE);
                    studentID.setVisibility(View.VISIBLE);
                }
            }
            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });
    }

    public void onClick(View view) {
        Intent myintent = new Intent(Login.this,MainMenu.class);
        startActivity(myintent);
    }
}