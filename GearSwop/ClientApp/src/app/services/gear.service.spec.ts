import { TestBed } from '@angular/core/testing';

import { GearService } from './gear.service';

describe('GearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GearService = TestBed.get(GearService);
    expect(service).toBeTruthy();
  });
});
