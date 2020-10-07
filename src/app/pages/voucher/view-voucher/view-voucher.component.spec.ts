import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVoucherComponent } from './view-voucher.component';

describe('ViewVoucherComponent', () => {
  let component: ViewVoucherComponent;
  let fixture: ComponentFixture<ViewVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
