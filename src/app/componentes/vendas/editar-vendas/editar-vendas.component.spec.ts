import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVendasComponent } from './editar-vendas.component';

describe('EditarVendasComponent', () => {
  let component: EditarVendasComponent;
  let fixture: ComponentFixture<EditarVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
