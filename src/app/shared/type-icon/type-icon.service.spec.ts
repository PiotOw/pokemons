import { TestBed } from '@angular/core/testing';

import { TypeIconService } from './type-icon.service';

describe('TypeIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeIconService = TestBed.get(TypeIconService);
    expect(service).toBeTruthy();
  });
});
