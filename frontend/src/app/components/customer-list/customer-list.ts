import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// import { RouterLink } from "../../../../node_modules/@angular/router/router_module.d";
@Component({
  selector: 'app-customer-list',
  imports: [MatButtonModule, RouterModule,CommonModule,MatIconModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList implements OnInit{
 // inject the customer service
  private customerService = inject(CustomerService);
  // customer list
  customers!: Customer[]

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.customerService.get().subscribe(
      data => {
        console.log('customers:', data);
        this.customers = data;
      },
      error => {
        console.error('error:', error);
      }
    );
  }

  onDeleteClick(customer: Customer) {
    if (window.confirm("Are you sure you want to delete the customer: " + customer.name + " ?")) {
      this.customerService.delete(customer._id).subscribe(
        data => {
          this.initData();
        },
        error => {
          console.error('error:', error);
        }
      )
    }
  }
}
