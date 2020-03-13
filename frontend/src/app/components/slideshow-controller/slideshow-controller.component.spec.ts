import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowControllerComponent } from './slideshow-controller.component';

describe('SlideshowControllerComponent', () => {
  let component: SlideshowControllerComponent;
  let fixture: ComponentFixture<SlideshowControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
