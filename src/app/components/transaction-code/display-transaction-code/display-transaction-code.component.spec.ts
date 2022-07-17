import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTransactionCodeComponent } from './display-transaction-code.component';

describe('DisplayTransactionCodeComponent', () => {
  let component: DisplayTransactionCodeComponent;
  let fixture: ComponentFixture<DisplayTransactionCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTransactionCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTransactionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
