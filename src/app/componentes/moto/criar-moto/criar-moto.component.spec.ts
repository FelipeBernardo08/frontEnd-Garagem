import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMotoComponent } from './criar-moto.component';

describe('CriarMotoComponent', () => {
  let component: CriarMotoComponent;
  let fixture: ComponentFixture<CriarMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
