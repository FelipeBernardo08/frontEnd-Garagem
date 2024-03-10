import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCarroComponent } from './criar-carro.component';

describe('CriarCarroComponent', () => {
  let component: CriarCarroComponent;
  let fixture: ComponentFixture<CriarCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
