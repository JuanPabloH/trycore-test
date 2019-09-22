import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieLocalComponent } from './specie-local.component';

describe('SpecieLocalComponent', () => {
  let component: SpecieLocalComponent;
  let fixture: ComponentFixture<SpecieLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
