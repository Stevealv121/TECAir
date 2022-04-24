package com.example.tecairmobile.entities;

public class User {
    private Integer id;
    private String email;
    private String first_name;
    private String second_name;
    private String first_surname;
    private String second_surname;
    private Integer phone;
    private String university;
    private Integer student_id;
    private String role_name;
    private String password;

    public User(Integer id, String email, String first_name, String second_name, String first_surname, String second_surname, Integer phone, String university, Integer student_id, String role_name, String password) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.second_name = second_name;
        this.first_surname = first_surname;
        this.second_surname = second_surname;
        this.phone = phone;
        this.university = university;
        this.student_id = student_id;
        this.role_name = role_name;
        this.password = password;
    }

    public User(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getSecond_name() {
        return second_name;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public String getFirst_surname() {
        return first_surname;
    }

    public void setFirst_surname(String first_surname) {
        this.first_surname = first_surname;
    }

    public String getSecond_surname() {
        return second_surname;
    }

    public void setSecond_surname(String second_surname) {
        this.second_surname = second_surname;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public Integer getStudent_id() {
        return student_id;
    }

    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

