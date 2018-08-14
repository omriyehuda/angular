import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-admin-navi',
  templateUrl: './admin-navi.component.html',
  styleUrls: ['./admin-navi.component.css']
})
export class AdminNaviComponent implements OnInit {

  public company= {};
  public customer = {};
  
  constructor(private _http : Http) { 
    this.company= {};
    this.customer = {};
  }
  

  ngOnInit() {
  }

  createCompany()
  {
      this._http.post('http://localhost:8080/AdminWS/admin/creatCompany', this.company).subscribe((response) =>
        {
          console.log(response);
          this.company= {};
        },
        (err) =>
        {
          console.log(err);
        }
      );
  }

  createCustomer() {
    this._http.post('http://localhost:8080/AdminWS/admin/createCustomer', this.customer).subscribe((response) =>
    {
      console.log(response);
      this.customer= {};
    },
    (err) =>
    {
      console.log(err);
    }
  );
  }
  
  clearForm() {
    this.company = {};
    this.customer ={};
  }

  
}
