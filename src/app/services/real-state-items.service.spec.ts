import { TestBed } from '@angular/core/testing';

import { RealStateItemsService } from './real-state-items.service';

describe('RealStateItemsService', () => {
  let service: RealStateItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealStateItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
