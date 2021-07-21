//package com.example.ecommerceapp.entities;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//
////@Data
////@Entity
////@Table(name = "card")
////@NoArgsConstructor
////@AllArgsConstructor
//public class Card {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "type")
//    private String type;
//
//    @Column(name = "name_on_card")
//    private String nameOnCard;
//
//    @Column(name = "card_number")
//    private String cardNumber;
//
//    @Column(name = "CVV2_number")
//    private String cvv2Number;
//
//    @Column(name = "expiration_month")
//    private String expirationMonth;
//
//    @Column(name = "expiration_year")
//    private String expirationYear;
//
////    @ManyToOne
////    @JoinColumn(name = "customer_id", nullable = false)
////    @JsonIgnoreProperties("orders")
////    private Customer customer;
////
////    @OneToOne
////    @JoinColumn(name = "order_id")
////    private Order order;
//
//}
