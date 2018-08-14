import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {CouponService} from '../../coupon.service';
@Component({
  selector: 'app-admin-facade-customer',
  templateUrl: './admin-facade-customer.component.html',
  styleUrls: ['./admin-facade-customer.component.css']
})
export class AdminFacadeCustomerComponent implements OnInit {

  customers = {};
  public customerToUpdate:any={};
  constructor(private _http : Http , private customerService:CouponService) {}

  ngOnInit() {
   
    this.customers = this.customerService.customerSubject;
    this.getAllCustomers();
   
  }

  getAllCustomers(){

    this.customerService.getAllCustomers();
  }

  updateCustomer(){

    this.customerService.updateCustomer(this.customerToUpdate);

  }
  
  setCustomerToUpdate(customer) {
    //TODO update by value.
   this.customerToUpdate = customer;
   //this.couponToUpdate.title = c.title;
   //this.couponToUpdate.price = c.price;
  }

  removeCustomer(){
    this.customerService.removeCustomer(this.customerToUpdate.id);
  }
  
}
