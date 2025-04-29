package com.devapp.crud_fullstack_angular.repository;

import com.devapp.crud_fullstack_angular.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository <Customer, Integer> {


}
