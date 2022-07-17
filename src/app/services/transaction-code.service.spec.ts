import { TestBed } from '@angular/core/testing';

import { TransactionCodeService } from './transaction-code.service';

describe('TransactionCodeService', () => {
  let service: TransactionCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
