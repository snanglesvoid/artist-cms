import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDHeadingComponent } from './three-d-heading.component';

describe('ThreeDHeadingComponent', () => {
  let component: ThreeDHeadingComponent;
  let fixture: ComponentFixture<ThreeDHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
