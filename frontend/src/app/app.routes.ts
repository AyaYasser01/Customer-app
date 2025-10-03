import { Routes } from '@angular/router';
import { CustomerCreate } from './components/customer-create/customer-create';
import { CustomerDetails } from './components/customer-details/customer-details';
import { CustomerList } from './components/customer-list/customer-list';
import { CustomerEdit } from './components/customer-edit/customer-edit';

export const routes: Routes = [
  {
    path:'',
    component:CustomerList
  },
  {
    path:'create',
    component:CustomerCreate
  },
  {
    path:'edit/:id',
    component:CustomerEdit
  },
  {
    path:'details/:id',
    component:CustomerDetails
  }
];
