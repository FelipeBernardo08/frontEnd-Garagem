import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosEditarComponent } from './contratos-editar.component';

describe('ContratosEditarComponent', () => {
  let component: ContratosEditarComponent;
  let fixture: ComponentFixture<ContratosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
