import { TestBed } from '@angular/core/testing';

import { GerarContratoCompraVendaService } from './gerar-contrato-compra-venda.service';

describe('GerarContratoCompraVendaService', () => {
  let service: GerarContratoCompraVendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerarContratoCompraVendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
