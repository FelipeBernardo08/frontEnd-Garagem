import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosImprimirComponent } from './contratos-imprimir.component';

describe('ContratosImprimirComponent', () => {
  let component: ContratosImprimirComponent;
  let fixture: ComponentFixture<ContratosImprimirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosImprimirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosImprimirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
