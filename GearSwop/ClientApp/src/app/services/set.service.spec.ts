import { TestBed } from '@angular/core/testing';

import { SetService } from './set.service';

describe('GearSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetService = TestBed.get(SetService);
    expect(service).toBeTruthy();
  });
});
