import { TestBed } from '@angular/core/testing';

import { AdsoffersService } from './adsoffers.service';

describe('AdsoffersService', () => {
  let service: AdsoffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsoffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
