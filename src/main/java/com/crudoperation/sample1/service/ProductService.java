package com.crudoperation.sample1.service;

import com.crudoperation.sample1.model.Product;
import com.crudoperation.sample1.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public Product add(Product product) {
        return productRepo.save(product);
    }

    public List<Product> get() {
        return productRepo.findAll();
    }
}
