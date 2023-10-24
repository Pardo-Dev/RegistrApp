import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeInfoPage } from './poke-info.page';

describe('PokeInfoPage', () => {
  let component: PokeInfoPage;
  let fixture: ComponentFixture<PokeInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
