import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEmblemComponent } from './type-emblem.component';

describe('TypeEmblemComponent', () => {
  let component: TypeEmblemComponent;
  let fixture: ComponentFixture<TypeEmblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEmblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEmblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
