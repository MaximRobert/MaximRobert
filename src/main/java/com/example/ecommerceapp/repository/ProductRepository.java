package com.example.ecommerceapp.repository;

import com.example.ecommerceapp.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findById(long id);

    Page<Product> findByCategoryId(long id, Pageable pageable);

//    @Query("SELECT p FROM Product p WHERE CONCAT(p.name, ' ', p.description) LIKE %?1%")
//    public List<Product> search(String keyword);

    List<Product> findByNameContaining(String keyword);
}
