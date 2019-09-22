import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleLocalComponent } from './people-local.component';

describe('PeopleLocalComponent', () => {
  let component: PeopleLocalComponent;
  let fixture: ComponentFixture<PeopleLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
