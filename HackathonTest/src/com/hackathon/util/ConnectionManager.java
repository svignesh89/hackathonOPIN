package com.hackathon.util;

import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;

public class ConnectionManager {

	static Connection con;
	public static Connection getConnection() {
		System.out.println("-------- MySQL JDBC Connection Testing ------------");

		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			System.out.println("Where is your MySQL JDBC Driver?");
			e.printStackTrace();
		}

		System.out.println("MySQL JDBC Driver Registered!");
		java.sql.Connection connection = null;

		try {
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/Hackathon","root", "password");

		} catch (SQLException e) {
			System.out.println("Connection Failed! Check output console");
			e.printStackTrace();
		}

		if (connection != null) {
			System.out.println("You made it, take control your database now!");
		} else {
			System.out.println("Failed to make connection!");
		}
		return con;

		
	}
}
