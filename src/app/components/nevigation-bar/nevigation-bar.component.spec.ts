import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevigationBarComponent } from './nevigation-bar.component';

describe('NevigationBarComponent', () => {
  let component: NevigationBarComponent;
  let fixture: ComponentFixture<NevigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
