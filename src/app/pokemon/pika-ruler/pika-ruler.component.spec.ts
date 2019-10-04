import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PikaRulerComponent } from './pika-ruler.component';

describe('PikaRulerComponent', () => {
  let component: PikaRulerComponent;
  let fixture: ComponentFixture<PikaRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PikaRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PikaRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
