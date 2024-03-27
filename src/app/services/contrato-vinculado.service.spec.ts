import { TestBed } from '@angular/core/testing';

import { ContratoVinculadoService } from './contrato-vinculado.service';

describe('ContratoVinculadoService', () => {
  let service: ContratoVinculadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoVinculadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
