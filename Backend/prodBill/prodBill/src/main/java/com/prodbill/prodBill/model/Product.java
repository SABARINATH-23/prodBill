package com.prodbill.prodBill.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	private String pname;
	private double price;
	private int quantity;
	private String description;
	private String category;
	
	
	public int getId()
	{
		return pid;
	}
	
	public String getPname()
	{
		return pname;
	}
	
	public double getPrice()
	{
		return price;
	}
	
	public int getQuantity()
	{
		return quantity;
	}
	
	public String getDescription()
	{
		return description;
	}
	
	public String getCategory()
	{
		return category;
	}
	
	public void setId(int pid)
	{
		this.pid =pid;
	}
	
	public void setPname(String pname)
	{
		this.pname = pname;
	}
	public void setPrice(double price)
	{
		this.price = price;
	}
	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}
	public void setDescription(String description)
	{
		this.description = description;
	}
	
	public void setCategory(String category)
	{
		this.category = category; 
	}
	
	
}
