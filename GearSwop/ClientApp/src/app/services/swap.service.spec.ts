import { TestBed } from '@angular/core/testing';

import { SwapService } from './swap.service';

describe('SwapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapService = TestBed.get(SwapService);
    expect(service).toBeTruthy();
  });
});
