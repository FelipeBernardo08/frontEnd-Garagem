import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDespesasComponent } from './criar-despesas.component';

describe('CriarDespesasComponent', () => {
  let component: CriarDespesasComponent;
  let fixture: ComponentFixture<CriarDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarDespesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
