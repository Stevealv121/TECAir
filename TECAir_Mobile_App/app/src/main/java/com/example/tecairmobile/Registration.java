package com.example.tecairmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ContentValues;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.tecairmobile.Utilities.Utilities;

public class Registration extends AppCompatActivity {

    EditText name, mail, college, studentID;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);

        name = (EditText) findViewById(R.id.name);
        mail = (EditText) findViewById(R.id.mail);
        college = (EditText) findViewById(R.id.college);
        studentID = (EditText) findViewById(R.id.studentID);
    }

    public void onClick(View view){
        singUserUp();
    }
    private void singUserUp(){
        SQLitehelper conn = new SQLitehelper(this, "bd_User", null,1);

        SQLiteDatabase db = conn.getWritableDatabase();

        ContentValues values = new ContentValues();
        values.put(Utilities.FIELD_NAME, name.getText().toString());
        values.put(Utilities.FIELD_EMAIL, mail.getText().toString());
        values.put(Utilities.FIELD_UNIVERSITY, college.getText().toString());
        values.put(Utilities.FIELD_STID, studentID.getText().toString());

        Long idResult = db.insert(Utilities.TABLE_USER, Utilities.FIELD_ID, values);

        Toast.makeText(getApplicationContext(), "Id Registro: " +idResult, Toast.LENGTH_SHORT).show();

    }
}