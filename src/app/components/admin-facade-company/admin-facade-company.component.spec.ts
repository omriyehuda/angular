import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacadeCompanyComponent } from './admin-facade-company.component';

describe('AdminFacadeCompanyComponent', () => {
  let component: AdminFacadeCompanyComponent;
  let fixture: ComponentFixture<AdminFacadeCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFacadeCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFacadeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
