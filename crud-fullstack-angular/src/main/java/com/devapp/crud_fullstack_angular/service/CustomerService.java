package com.devapp.crud_fullstack_angular.service;

import com.devapp.crud_fullstack_angular.entity.Customer;


import java.util.List;


public interface CustomerService {


    Customer save (Customer customer);
    List<Customer> finAll();
    Customer finById(Integer id);
    void deleteById(Integer id);
    Customer update (Customer customer);
}
