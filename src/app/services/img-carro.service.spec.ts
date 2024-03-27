import { TestBed } from '@angular/core/testing';

import { ImgCarroService } from './img-carro.service';

describe('ImgCarroService', () => {
  let service: ImgCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
