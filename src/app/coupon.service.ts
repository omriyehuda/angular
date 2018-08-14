import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CouponService{
private couponsData:any = {};
private companiesData:any = {};
private customersData:any = {};
couponsSubject = new BehaviorSubject <any>(this.couponsData);
companiesSubject = new BehaviorSubject <any>(this.companiesData);
customerSubject = new BehaviorSubject <any>(this.customersData);
constructor(private _http : Http){}

getCoupons ()
{
    this._http.get('http://localhost:8080/CompanyWS/company/getAllCoupons')
    .map(res => res.json())
    .subscribe(
        //On sucess (200)
      data => {
        this.couponsData = data;
        this.couponsSubject.next(this.couponsData);
      }, //On fail - we need to take care of this
      err => console.error(err)
      
    );
}    

updateCoupon(c)
{
    this._http.put('http://localhost:8080/CompanyWS/company/updateCoupon', c).subscribe((response) =>
      {
        console.log(response);
        this.getCoupons();
      },
      (err) =>
      {
        console.log(err);
      }
    );
  }

  deleteCoupon(id)
  {
      this._http.delete('http://localhost:8080/CompanyWS/company/removeCoupon/' + id ).subscribe((response) =>
        {
          console.log(response);
          this.getCoupons();
        },
        (err) =>
        {
          console.log(err);
        }
      );
  }

  getAllCompanies(){
    
    this._http.get('http://localhost:8080/AdminWS/admin/getAllCompanies')
    .map(res => res.json())
    .subscribe(
        //On sucess (200)
      data => {
        this.companiesData = data;
        this.companiesSubject.next(this.companiesData);
      }, //On fail - we need to take care of this
      err => console.error(err)
      
    );
  }

  updateCompany(company){
    
    this._http.put('http://localhost:8080/AdminWS/admin/updateCompany', company).subscribe((response) =>
      {
        console.log(response);
        this.getAllCompanies();
      },
      (err) =>
      {
        console.log(err);
      }
    );
  }

  removeCompany(id){

    this._http.delete('http://localhost:8080/AdminWS/admin/removeCompany/' + id ).subscribe((response) =>
        {
          console.log(response);
          this.getAllCompanies();
        },
        (err) =>
        {
          console.log(err);
        }
      );
  }

  createCompany(company){

    this._http.put('http://localhost:8080/AdminWS/admin/creatCompany', company).subscribe((response) =>
    {
      console.log(response);
      this.getCoupons();
    },
    (err) =>
    {
      console.log(err);
    }
  );
}
getAllCustomers(){
    
  this._http.get('http://localhost:8080/AdminWS/admin/getAllCustomers')
  .map(res => res.json())
  .subscribe(
      //On sucess (200)
    data => {
      this.customersData = data;
      this.customerSubject.next(this.customersData);
    }, //On fail - we need to take care of this
    err => console.error(err)
    
  );
}
removeCustomer(id){

  this._http.delete('http://localhost:8080/AdminWS/admin/removeCustomer/' + id ).subscribe((response) =>
      {
        console.log(response);
        this.getAllCustomers();
      },
      (err) =>
      {
        console.log(err);
      }
    );
}

updateCustomer(customer){
    
  this._http.put('http://localhost:8080/AdminWS/admin/updateCustomer', customer).subscribe((response) =>
    {
      console.log(response);
      this.getAllCustomers();
    },
    (err) =>
    {
      console.log(err);
    }
  );
}
  
}