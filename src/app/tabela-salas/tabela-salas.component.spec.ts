import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaSalasComponent } from './tabela-salas.component';

describe('TabelaSalasComponent', () => {
  let component: TabelaSalasComponent;
  let fixture: ComponentFixture<TabelaSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaSalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
