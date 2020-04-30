import { TestBed } from '@angular/core/testing';

import { GearImageServiceService } from './gear-image-service.service';

describe('GearImageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GearImageServiceService = TestBed.get(GearImageServiceService);
    expect(service).toBeTruthy();
  });
});
