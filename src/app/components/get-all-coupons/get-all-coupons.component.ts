import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {CouponService} from '../../coupon.service';

import 'rxjs/add/operator/map'; 
@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  coupons = {};
  public couponToUpdate:any={};
  constructor(private _http : Http , private couponService:CouponService) {}

  ngOnInit() {
    this.coupons = this.couponService.couponsSubject;
    this.getCoupons();
  }

getCoupons()
{
 this.couponService.getCoupons();

}

updateCoupon()
{
   this.couponService.updateCoupon(this.couponToUpdate);
  }

setCouponToUpdate(c) {
    //TODO update by value.
   this.couponToUpdate = c;
   //this.couponToUpdate.title = c.title;
   //this.couponToUpdate.price = c.price;
  }

  deleteCoupon()
  {
    this.couponService.deleteCoupon(this.couponToUpdate.id);
  }
}