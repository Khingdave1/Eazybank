import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLedgerReportGroupsComponent } from './display-ledger-report-groups.component';

describe('DisplayLedgerReportGroupsComponent', () => {
  let component: DisplayLedgerReportGroupsComponent;
  let fixture: ComponentFixture<DisplayLedgerReportGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLedgerReportGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayLedgerReportGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
