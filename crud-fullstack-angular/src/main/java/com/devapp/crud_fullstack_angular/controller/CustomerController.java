package com.devapp.crud_fullstack_angular.controller;


import com.devapp.crud_fullstack_angular.entity.Customer;
import com.devapp.crud_fullstack_angular.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//http://localhost:8081/api/customers
@CrossOrigin( origins = "http://localhost:4200", methods = {RequestMethod.GET,
RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }



    //http://localhost:8081/api/customers
    @GetMapping
    public List<Customer> findAll() {
        return customerService.finAll();
    }

    //http://localhost:8081/api/customers/1
    @GetMapping("/{id}")
    public Customer findById(@PathVariable Integer id) {
        return customerService.finById(id);
    }

    //http://localhost:8081/api/customers
    @PostMapping
    public ResponseEntity<Customer> save(@RequestBody Customer customer){
        Customer insert = customerService.save(customer);
        return new ResponseEntity<>(insert, HttpStatus.CREATED);
    }

    //http://localhost:8081/api/customers/1
    @DeleteMapping("/{id}")
    public void deletedById(@PathVariable Integer id) {
        customerService.deleteById(id);
    }


    //http://localhost:8081/api/customers
    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody Customer customer) {
        Customer customerDb = customerService.finById(id);
        customerDb.setFirstName(customer.getFirstName());
        customerDb.setLastName(customer.getLastName());
        customerDb.setEmail(customer.getEmail());
        return customerService.update(customerDb);
    }

}
