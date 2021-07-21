package com.example.ecommerceapp.repository;

import com.example.ecommerceapp.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findById(long id);
}
