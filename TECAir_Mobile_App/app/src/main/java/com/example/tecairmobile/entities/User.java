package com.example.tecairmobile.entities;

/** Represents the User
 * @author Dennis Jimenez
 *
 */
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

    /**
     * Constructor for user object
     * @param id Integer with the user id
     * @param email String with the user e-mail
     * @param first_name String with the user's first name
     * @param second_name String with the user's second name
     * @param first_surname String with the user's first surname
     * @param second_surname String with the user's second surname
     * @param phone Integer with the user's phone
     * @param university String with the name of the university
     * @param student_id Integer with the user student id
     * @param role_name String with the name of the role
     * @param password String with the user password
     */
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

    /**
     * Constructor for an empty object
     */
    public User(){

    }

    /**
     * Gets the id
     * @return Integer with the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the id
     * @param id Integer with the id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the email
     * @return String with the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the email
     * @param email String with the email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets the first name
     * @return String with the first name
     */
    public String getFirst_name() {
        return first_name;
    }

    /**
     * Sets the first name
     * @param first_name String with the firs name
     */
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    /**
     * Gets second name
     * @return String with the second name
     */
    public String getSecond_name() {
        return second_name;
    }

    /**
     * Sets second name
     * @param second_name String with the second name
     */
    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    /**
     * Gets first surname
     * @return String with the first surname
     */
    public String getFirst_surname() {
        return first_surname;
    }

    /**
     * Sets first surname
     * @param first_surname String with the first surname
     */
    public void setFirst_surname(String first_surname) {
        this.first_surname = first_surname;
    }

    /**
     * Gets second surname
     * @return String with the second surname
     */
    public String getSecond_surname() {
        return second_surname;
    }

    /**
     * Sets second surname
     * @param second_surname String with the second surname
     */
    public void setSecond_surname(String second_surname) {
        this.second_surname = second_surname;
    }

    /**
     * Gets the phone
     * @return Integer with the phone
     */
    public Integer getPhone() {
        return phone;
    }

    /**
     * Sets phone
     * @param phone Integer with the phone
     */
    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    /**
     * Gets University
     * @return String with the university name
     */
    public String getUniversity() {
        return university;
    }

    /**
     * Sets University
     * @param university String with the university name
     */
    public void setUniversity(String university) {
        this.university = university;
    }

    /**
     * Gets student id
     * @return Integer with the student id
     */
    public Integer getStudent_id() {
        return student_id;
    }

    /**
     * Sets student id
     * @param student_id Integer with the student id
     */
    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    /**
     * Gets the role name
     * @return String with the role name
     */
    public String getRole_name() {
        return role_name;
    }

    /**
     * Sets the role name
     * @param role_name String with the role name
     */
    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    /**
     * Gets the password
     * @return String with the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password
     * @param password String with the password
     */
    public void setPassword(String password) {
        this.password = password;
    }
}

