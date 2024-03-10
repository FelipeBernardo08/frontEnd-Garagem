import { TestBed } from '@angular/core/testing';

import { RequisitosFormularioMotoService } from './requisitos-formulario-moto.service';

describe('RequisitosFormularioMotoService', () => {
  let service: RequisitosFormularioMotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisitosFormularioMotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
