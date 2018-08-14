import { Component } from '@angular/core';
import {CouponService} from './coupon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private couponService:CouponService){}
}
