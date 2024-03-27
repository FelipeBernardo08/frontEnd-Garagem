import { TestBed } from '@angular/core/testing';

import { ImgMotoService } from './img-moto.service';

describe('ImgMotoService', () => {
  let service: ImgMotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgMotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
