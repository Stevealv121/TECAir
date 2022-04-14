package com.example.tecairmobile.entities;

public class User {
    private int id;
    private String email;
    private String fname;
    private String sname;
    private String fsname;
    private String ssname;
    private int phone;
    private String university;
    private int studentid;
    private String rolename;

    public User(int id, String email, String fname, String sname, String fsname, String ssname, int phone, String university, int studentid, String rolename) {
        this.id = id;
        this.email = email;
        this.fname = fname;
        this.sname = sname;
        this.fsname = fsname;
        this.ssname = ssname;
        this.phone = phone;
        this.university = university;
        this.studentid = studentid;
        this.rolename = rolename;
    }

    public int getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getFname() {
        return fname;
    }

    public String getSname() {
        return sname;
    }

    public String getFsname() {
        return fsname;
    }

    public String getSsname() {
        return ssname;
    }

    public int getPhone() {
        return phone;
    }

    public String getUniversity() {
        return university;
    }

    public int getStudentid() {
        return studentid;
    }

    public String getRolename() {
        return rolename;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public void setFsname(String fsname) {
        this.fsname = fsname;
    }

    public void setSsname(String ssname) {
        this.ssname = ssname;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public void setStudentid(int studentid) {
        this.studentid = studentid;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }
}
