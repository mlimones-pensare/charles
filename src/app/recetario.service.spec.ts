import { TestBed } from '@angular/core/testing';

import { RecetarioService } from './recetario.service';

describe('RecetarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetarioService = TestBed.get(RecetarioService);
    expect(service).toBeTruthy();
  });
});
