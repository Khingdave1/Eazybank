import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLedgerReportGroupComponent } from './add-ledger-report-group.component';

describe('AddLedgerReportGroupComponent', () => {
  let component: AddLedgerReportGroupComponent;
  let fixture: ComponentFixture<AddLedgerReportGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLedgerReportGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLedgerReportGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
