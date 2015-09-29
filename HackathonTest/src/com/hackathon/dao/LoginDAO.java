package com.hackathon.dao;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.hackathon.model.LoginBean;
import com.hackathon.util.ConnectionManager;
import com.mysql.jdbc.Connection;

public class LoginDAO {
	
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	private CallableStatement callableStmt = null;
	
	public List<LoginBean> getLoginList(String userName, String password) {
		
		Connection con = ConnectionManager.getConnection();
		List<LoginBean> loginList = new ArrayList<LoginBean>();		
		String query = null;
		query = "select * from login";
		System.out.println("Query Login Fetch ---- " + query);
		
		try {
			pstmt = con.prepareStatement(query);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				LoginBean login = new LoginBean();
				login.setUserName(rs.getString(1));
				login.setPassword(rs.getString(2));
				loginList.add(login);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally {
			try {
				if(con != null) {
					pstmt.close();
					rs.close();
					con.close();
				}
			} catch(SQLException e) {
				e.printStackTrace();
			}
		}
			
		return loginList;
		
	}

}
