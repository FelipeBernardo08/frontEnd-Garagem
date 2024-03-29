import { TestBed } from '@angular/core/testing';

import { FormatarTextoService } from './formatar-texto.service';

describe('FormatarTextoService', () => {
  let service: FormatarTextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatarTextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
