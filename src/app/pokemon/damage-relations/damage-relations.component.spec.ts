import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageRelationsComponent } from './damage-relations.component';

describe('DamageRelationsComponent', () => {
  let component: DamageRelationsComponent;
  let fixture: ComponentFixture<DamageRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
