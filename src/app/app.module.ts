import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { NevigationBarComponent } from './components/nevigation-bar/nevigation-bar.component';
import { CouponService } from './coupon.service';

import { AdminNaviComponent } from './components/admin-navi/admin-navi.component';
import { AdminFacadeCompanyComponent } from './components/admin-facade-company/admin-facade-company.component';
import { AdminFacadeCustomerComponent } from './components/admin-facade-customer/admin-facade-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    
    GetAllCouponsComponent,
    NevigationBarComponent,
  
    AdminNaviComponent,
  
    AdminFacadeCompanyComponent,
  
    AdminFacadeCustomerComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ([
      {    
        path: 'GetAllCoupons',
        component : GetAllCouponsComponent
      }  ,
      {    
        path: 'adminFacadeCompany',
        component : AdminFacadeCompanyComponent
      },
      {    
        path: 'adminFacadeCustomer',
        component : AdminFacadeCustomerComponent
      }
    ])

  ],
  providers: [CouponService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
