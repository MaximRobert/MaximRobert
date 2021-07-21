package com.example.ecommerceapp.repository;

import com.example.ecommerceapp.entities.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    OrderItem findById(long id);
}
