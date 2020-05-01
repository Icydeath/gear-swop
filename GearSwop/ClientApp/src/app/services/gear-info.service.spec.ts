import { TestBed } from '@angular/core/testing';

import { GearInfoService } from './gear-info.service';

describe('GearInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GearInfoService = TestBed.get(GearInfoService);
    expect(service).toBeTruthy();
  });
});
