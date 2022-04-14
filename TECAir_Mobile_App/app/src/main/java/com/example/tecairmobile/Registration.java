package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.tecairmobile.Utilities.Utilities;

public class Registration extends AppCompatActivity {

    EditText name, mail, college, studentID,secondname,firstsurname,secondsurname;

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
    }

    public void onClick(View view){
        singUserUp();
        Intent myintent = new Intent(Registration.this,MainMenu.class);
        startActivity(myintent);

    }
    private void singUserUp(){
        SQLitehelper conn = new SQLitehelper(this, "bd_User", null,1);

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

    }
}