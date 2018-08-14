import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-nevigation-bar',
  templateUrl: './nevigation-bar.component.html',
  styleUrls: ['./nevigation-bar.component.css']
})
export class NevigationBarComponent implements OnInit {

  
  public c= {}
  constructor(private _http : Http) { 
    this.c= {}
  }

  ngOnInit() {
  }

  createCoupon()
  {
      this._http.post('http://localhost:8080/CompanyWS/company/createCoupon', this.c).subscribe((response) =>
        {
          console.log(response);
          this.c= {};
        },
        (err) =>
        {
          console.log(err);
        }
      );
  }
  
  clearForm() {
    this.c = {};
  }

}
