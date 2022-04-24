package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.tecairmobile.Utilities.Utilities;

public class Login extends AppCompatActivity {

    EditText password, mail;
    SQLitehelper conn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        conn = new SQLitehelper(getApplicationContext(), "TecAir_BD", null, 1);

        password = (EditText) findViewById(R.id.password);
        mail = (EditText) findViewById(R.id.mail);

    }

    public void onClick(View view) {
        consult();
    }

    private void consult() {
        int id;
        SQLiteDatabase db = conn.getReadableDatabase();
        String[] consult = {mail.getText().toString(), password.getText().toString()};
        String[] result = {Utilities.FIELD_ID, Utilities.FIELD_FNAME, Utilities.FIELD_FSNAME};
        try{
            Cursor cursor = db.query(Utilities.TABLE_USER,result,Utilities.FIELD_EMAIL+"=?"+" AND "+Utilities.FIELD_PASS+"=?",consult,null,null,null);
            cursor.moveToFirst();
            Toast.makeText(getApplicationContext(),"Welcome " + cursor.getString(1) + " " + cursor.getString(2), Toast.LENGTH_LONG).show();
            id = cursor.getInt(0);
            cursor.close();
            Intent myintent = new Intent(Login.this,MainMenu.class);
            myintent.putExtra("id",id);
            startActivity(myintent);

        }catch(Exception e){
            Toast.makeText(getApplicationContext(),"User was not found", Toast.LENGTH_LONG).show();
            clean();
        }
    }

    private void clean() {
        password.setText("");
        mail.setText("");
    }
}