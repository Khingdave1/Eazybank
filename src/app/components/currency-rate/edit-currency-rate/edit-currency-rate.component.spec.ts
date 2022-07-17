import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurrencyRateComponent } from './edit-currency-rate.component';

describe('EditCurrencyRateComponent', () => {
  let component: EditCurrencyRateComponent;
  let fixture: ComponentFixture<EditCurrencyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCurrencyRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCurrencyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
