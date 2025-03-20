package com.crudoperation.sample1.service;

import com.crudoperation.sample1.model.Product;
import com.crudoperation.sample1.repo.ProductRepo;
import com.crudoperation.sample1.utils.AwsS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private AwsS3Service awsS3Service;

    public Product add(Product product, MultipartFile file) throws IOException {
        if(!file.isEmpty()) {
            String imageUrl= awsS3Service.saveImageToS3(file);
            product.setImageUrl(imageUrl);
        }
        return productRepo.save(product);
    }

    public List<Product> get() {
        return productRepo.findAll();
    }
}
