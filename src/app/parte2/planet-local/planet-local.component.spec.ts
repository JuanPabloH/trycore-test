import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetLocalComponent } from './planet-local.component';

describe('PlanetLocalComponent', () => {
  let component: PlanetLocalComponent;
  let fixture: ComponentFixture<PlanetLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
