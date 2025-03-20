package com.crudoperation.sample1.controller;

import com.crudoperation.sample1.model.Product;
import com.crudoperation.sample1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3001")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public Product add(@RequestPart Product product,@RequestPart(required = false) MultipartFile file) throws IOException {
        return productService.add(product,file);
    }

    @GetMapping("/get")
    public List<Product> getProduct(){
        return productService.get();
    }

}
