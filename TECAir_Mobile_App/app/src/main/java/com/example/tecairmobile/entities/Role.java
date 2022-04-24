package com.example.tecairmobile.entities;

/** Represents the Roles
 * @author Dennis Jimenez
 *
 */
public class Role {

    private String name;
    private String description;

    /**
     * Constructor for a Role object
     * @param name A string for the role name
     * @param description A string for the role description
     */
    public Role(String name, String description) {
        this.name = name;
        this.description = description;
    }

    /**
     * Gets the name
     * @return A string with the name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name
     * @param name A string with the name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the description
     * @return A string with the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the description
     * @param description A string with the description
     */
    public void setDescription(String description) {
        this.description = description;
    }
}
