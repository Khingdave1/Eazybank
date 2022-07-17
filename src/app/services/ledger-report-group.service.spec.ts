import { TestBed } from '@angular/core/testing';

import { LedgerReportGroupService } from './ledger-report-group.service';

describe('LedgerReportGroupService', () => {
  let service: LedgerReportGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedgerReportGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
