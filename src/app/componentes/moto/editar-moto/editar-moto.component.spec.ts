import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMotoComponent } from './editar-moto.component';

describe('EditarMotoComponent', () => {
  let component: EditarMotoComponent;
  let fixture: ComponentFixture<EditarMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
