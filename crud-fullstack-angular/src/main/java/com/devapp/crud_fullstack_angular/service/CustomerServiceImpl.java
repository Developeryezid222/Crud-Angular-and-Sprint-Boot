package com.devapp.crud_fullstack_angular.service;
import com.devapp.crud_fullstack_angular.entity.Customer;
import com.devapp.crud_fullstack_angular.exception.ResourceNotFoundException;
import com.devapp.crud_fullstack_angular.repository.CustomerRepository;
import org.aspectj.bridge.IMessage;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public Customer save(Customer customer) {
        try {
            return customerRepository.save(customer);
        } catch (Exception e) {
            System.err.println("Error al guardar el cliente ❌: " + e.getMessage());
            throw e;
        }
    }


    @Override
    public List<Customer> finAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer finById(Integer id) {
        Customer customer = customerRepository.findById(id).orElseThrow(
                () ->{
                    throw new ResourceNotFoundException("Customers con id" + id + "no se encuentra");
                }
        );
        //return customerRepository.findById(id).get();
        return customer;
    }

    @Override
    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Customer update(Customer customer) {
        return customerRepository.save(customer);
    }
}
