package com.example.ecommerceapp.repository;

import com.example.ecommerceapp.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {

    Address findById(long id);
}
