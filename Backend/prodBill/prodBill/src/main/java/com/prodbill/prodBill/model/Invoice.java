package com.prodbill.prodBill.model;

import java.util.Date;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Invoice {
	@Id
	private int ino;
	private String company_Address;
	private String customer_Address;
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private Date date;
	private int quantity;
	private double per_Item;
	private double total_Amount;
	@ElementCollection
	private Set<Product> product;
	
	
	public int getIno()
	{
		return ino;
	}
	public String getCompany_Address()
	{
		return company_Address;
	}
	
	
	
	
	
}
