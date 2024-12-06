import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardSalasComponent } from './list-card-salas.component';

describe('ListCardSalasComponent', () => {
  let component: ListCardSalasComponent;
  let fixture: ComponentFixture<ListCardSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardSalasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
