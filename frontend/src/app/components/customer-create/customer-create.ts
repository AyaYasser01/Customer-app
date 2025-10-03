import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './customer-create.html',
  styleUrl: './customer-create.css'
})
export class CustomerCreate {

}
