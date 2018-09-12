import { TestBed, inject } from '@angular/core/testing';

import { PlanetListService } from './planet-list.service';

describe('PlanetListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetListService]
    });
  });

  it('should be created', inject([PlanetListService], (service: PlanetListService) => {
    expect(service).toBeTruthy();
  }));
});
