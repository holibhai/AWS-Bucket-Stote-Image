package com.crudoperation.sample1.controller;

import com.crudoperation.sample1.model.Product;
import com.crudoperation.sample1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public Product add(@RequestBody Product product) {
        return productService.add(product);
    }

    @GetMapping
    public List<Product> getProduct(){
        return productService.get();
    }

}
