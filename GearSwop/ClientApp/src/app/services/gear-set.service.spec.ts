import { TestBed } from '@angular/core/testing';

import { GearSetService } from './gear-set.service';

describe('GearSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GearSetService = TestBed.get(GearSetService);
    expect(service).toBeTruthy();
  });
});
