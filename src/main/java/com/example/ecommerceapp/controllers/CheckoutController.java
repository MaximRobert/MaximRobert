package com.example.ecommerceapp.controllers;

import com.example.ecommerceapp.dto.OrderDTO;
import com.example.ecommerceapp.services.CheckoutService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckoutController {

    private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("api/checkout")
    public String saveOrder(@RequestBody OrderDTO orderDTO){
        return checkoutService.placeOrder(orderDTO);
    }
}
