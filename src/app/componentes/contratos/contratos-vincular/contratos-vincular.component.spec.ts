import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosVincularComponent } from './contratos-vincular.component';

describe('ContratosVincularComponent', () => {
  let component: ContratosVincularComponent;
  let fixture: ComponentFixture<ContratosVincularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosVincularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosVincularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
