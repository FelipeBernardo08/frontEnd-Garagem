import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosCriarComponent } from './contratos-criar.component';

describe('ContratosCriarComponent', () => {
  let component: ContratosCriarComponent;
  let fixture: ComponentFixture<ContratosCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
