import { TestBed } from '@angular/core/testing';

import { PikachuService } from './pikachu.service';

describe('PikachuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PikachuService = TestBed.get(PikachuService);
    expect(service).toBeTruthy();
  });
});
