import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacadeCustomerComponent } from './admin-facade-customer.component';

describe('AdminFacadeCustomerComponent', () => {
  let component: AdminFacadeCustomerComponent;
  let fixture: ComponentFixture<AdminFacadeCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFacadeCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFacadeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
