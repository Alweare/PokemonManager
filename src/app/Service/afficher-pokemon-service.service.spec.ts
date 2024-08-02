import { TestBed } from '@angular/core/testing';

import { AfficherPokemonServiceService } from './afficher-pokemon-service.service';

describe('AfficherPokemonServiceService', () => {
  let service: AfficherPokemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfficherPokemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
