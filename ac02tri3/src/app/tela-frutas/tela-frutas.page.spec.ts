import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaFrutasPage } from './tela-frutas.page';

describe('TelaFrutasPage', () => {
  let component: TelaFrutasPage;
  let fixture: ComponentFixture<TelaFrutasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFrutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
