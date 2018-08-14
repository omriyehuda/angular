import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {CouponService} from '../../coupon.service';
@Component({
  selector: 'app-admin-facade-company',
  templateUrl: './admin-facade-company.component.html',
  styleUrls: ['./admin-facade-company.component.css']
})
export class AdminFacadeCompanyComponent implements OnInit {

  companies = {};
  public companyToUpdate:any={};
  constructor(private _http : Http , private companyService:CouponService) {}

  ngOnInit() {
    this.companies = this.companyService.companiesSubject;
    this.getAllCompanies();
   
  }

  getAllCompanies(){

    this.companyService.getAllCompanies();
  }

  updateCompany(){

    this.companyService.updateCompany(this.companyToUpdate);

  }
  
  setCompanyToUpdate(company) {
    //TODO update by value.
   this.companyToUpdate = company;
   //this.couponToUpdate.title = c.title;
   //this.couponToUpdate.price = c.price;
  }

  removeCompany(){
    this.companyService.removeCompany(this.companyToUpdate.id);
  }
  
  getCoupons(){
    this.companyService.getCoupons();
  }
}
