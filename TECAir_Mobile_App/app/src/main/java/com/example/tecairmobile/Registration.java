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

public class Registration extends AppCompatActivity {

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

    public void onClick(View view){
        singUserUp();
        Intent myintent = new Intent(Registration.this,intro.class);
        startActivity(myintent);

    }
    private void singUserUp(){
        SQLitehelper conn = new SQLitehelper(this, "TecAir_BD", null,1);

        SQLiteDatabase db = conn.getWritableDatabase();

        ContentValues values = new ContentValues();
        values.put(Utilities.FIELD_FNAME, name.getText().toString());
        values.put(Utilities.FIELD_SNAME, secondname.getText().toString());
        values.put(Utilities.FIELD_FSNAME, firstsurname.getText().toString());
        values.put(Utilities.FIELD_SSNAME, secondsurname.getText().toString());
        values.put(Utilities.FIELD_EMAIL, mail.getText().toString());
        values.put(Utilities.FIELD_UNIVERSITY, college.getText().toString());
        values.put(Utilities.FIELD_STID, studentID.getText().toString());

        Long idResult = db.insert(Utilities.TABLE_USER, Utilities.FIELD_ID, values);

        Toast.makeText(getApplicationContext(), "Id Registro: " +idResult, Toast.LENGTH_SHORT).show();
        db.close();

    }
}