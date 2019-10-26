import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEmblemComponent } from './pokemon-emblem.component';

describe('PokemonEmblemComponent', () => {
  let component: PokemonEmblemComponent;
  let fixture: ComponentFixture<PokemonEmblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEmblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEmblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
