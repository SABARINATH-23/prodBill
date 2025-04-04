package com.prodbill.prodBill.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prodbill.prodBill.model.Product;
import com.prodbill.prodBill.repo.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository prepo;
	
	public void Save(Product p)
	{
		prepo.save(p);
	}
	
	public Product FetchById(int i)
	{
		Optional<Product> p = prepo.findById(i);
		if(p.isPresent())
		{
			return p.get();
		}
		
		return null;
	}
	
	public List<Product> FetchAll()
	{
		return prepo.findAll();
	}
	
	
	public String DeleteByid(int i)
	{
		Product  p = FetchById(i);
		if(p != null)
		{
			prepo.delete(p);
			return "Data Deleted";
		}
		return "Id not Found";
	}

	
	public String updatProduct(Product p)
	{
		//Product p1 = FetchById(id);
		
		if(p != null)
		{
//			p1.setPname(p.getPname());
//			p1.setPrice(p.getPrice());
//			p1.setQuantity(p.getQuantity());
//			p1.setDescription(p.getDescription());
//			p1.setCategory(p.getCategory());
			Save(p);
			return "Data Updated";
		}
		return "Id Not Found";
		
	}
	
}
