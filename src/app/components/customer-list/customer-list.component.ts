import { SearchService } from './../../service/search.service';
import { CustomerService } from './../../service/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  
  customers : Customer [] = [];
  filteredCustomers: Customer[] = [];
  constructor(
    private customerService : CustomerService,
    private searchService: SearchService,
    
  ) {}

  ngOnInit(): void {
      this.ListCustomer();
      this.searchService.searchId$.subscribe((id) => {
        this.filteredCustomers = this.customers.filter(customer => customer.id === id);
      });
  }
  ListCustomer(){
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data
        console.log(this.customers)
      }
    );
  }
  


  deleteCustomer(id: number) {
     
    this.customerService.deleteCustomer(id).subscribe(
      
      () => this.ListCustomer( ) 
    )
  }
}
