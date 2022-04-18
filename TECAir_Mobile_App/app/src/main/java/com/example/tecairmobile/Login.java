package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.tecairmobile.Utilities.Utilities;

import java.util.Arrays;
import java.util.List;

public class Login extends AppCompatActivity {

    EditText name, mail,firstsurname;
    SQLitehelper conn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        conn = new SQLitehelper(getApplicationContext(), "TecAir_BD", null, 1);

        name = (EditText) findViewById(R.id.name);
        firstsurname = (EditText) findViewById(R.id.firstsurname);
        mail = (EditText) findViewById(R.id.mail);

    }

    public void onClick(View view) {
        consult();
    }

    private void consult() {
        SQLiteDatabase db = conn.getReadableDatabase();
        String[] consult = {name.getText().toString(), firstsurname.getText().toString(), mail.getText().toString()};
        String[] result = {Utilities.FIELD_FNAME, Utilities.FIELD_FSNAME};
        try{
            Cursor cursor = db.query(Utilities.TABLE_USER,result,Utilities.FIELD_FNAME+"=?"+" AND "+Utilities.FIELD_FSNAME+"=?"+" AND " + Utilities.FIELD_EMAIL+"=?",consult,null,null,null);
            cursor.moveToFirst();
            Toast.makeText(getApplicationContext(),"Welcome " + cursor.getString(0) + " " + cursor.getString(1), Toast.LENGTH_LONG).show();
            cursor.close();
            Intent myintent = new Intent(Login.this,MainMenu.class);
            startActivity(myintent);

        }catch(Exception e){
            Toast.makeText(getApplicationContext(),"User was not found", Toast.LENGTH_LONG).show();
            clean();
        }
    }

    private void clean() {
        name.setText("");
        mail.setText("");
        firstsurname.setText("");
    }
}