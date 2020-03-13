import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFlipComponent } from './text-flip.component';

describe('TextFlipComponent', () => {
  let component: TextFlipComponent;
  let fixture: ComponentFixture<TextFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
