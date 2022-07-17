import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrencyComponent } from './display-currency.component';

describe('DisplayCurrencyComponent', () => {
  let component: DisplayCurrencyComponent;
  let fixture: ComponentFixture<DisplayCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
