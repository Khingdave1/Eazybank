import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrencyRateComponent } from './display-currency-rate.component';

describe('DisplayCurrencyRateComponent', () => {
  let component: DisplayCurrencyRateComponent;
  let fixture: ComponentFixture<DisplayCurrencyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCurrencyRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCurrencyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
