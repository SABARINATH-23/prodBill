package com.prodbill.prodBill.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodbill.prodBill.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
