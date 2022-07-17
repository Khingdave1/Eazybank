import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLedgerReportGroupComponent } from './edit-ledger-report-group.component';

describe('EditLedgerReportGroupComponent', () => {
  let component: EditLedgerReportGroupComponent;
  let fixture: ComponentFixture<EditLedgerReportGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLedgerReportGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLedgerReportGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
