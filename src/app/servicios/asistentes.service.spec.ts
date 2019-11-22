import { TestBed } from '@angular/core/testing';

import { AsistentesService } from './asistentes.service';

describe('AsistentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsistentesService = TestBed.get(AsistentesService);
    expect(service).toBeTruthy();
  });
});
