import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyRateComponent } from './add-currency-rate.component';

describe('AddCurrencyRateComponent', () => {
  let component: AddCurrencyRateComponent;
  let fixture: ComponentFixture<AddCurrencyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCurrencyRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCurrencyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
