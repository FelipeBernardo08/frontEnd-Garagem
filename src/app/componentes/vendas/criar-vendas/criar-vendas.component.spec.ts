import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVendasComponent } from './criar-vendas.component';

describe('CriarVendasComponent', () => {
  let component: CriarVendasComponent;
  let fixture: ComponentFixture<CriarVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
