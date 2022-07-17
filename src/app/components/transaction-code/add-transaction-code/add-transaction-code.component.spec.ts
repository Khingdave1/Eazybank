import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionCodeComponent } from './add-transaction-code.component';

describe('AddTransactionCodeComponent', () => {
  let component: AddTransactionCodeComponent;
  let fixture: ComponentFixture<AddTransactionCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransactionCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransactionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
