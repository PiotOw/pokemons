import { TestBed } from '@angular/core/testing';

import { StatIconService } from './stat-icon.service';

describe('StatIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatIconService = TestBed.get(StatIconService);
    expect(service).toBeTruthy();
  });
});
