import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransactionCodeComponent } from './edit-transaction-code.component';

describe('EditTransactionCodeComponent', () => {
  let component: EditTransactionCodeComponent;
  let fixture: ComponentFixture<EditTransactionCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransactionCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransactionCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
