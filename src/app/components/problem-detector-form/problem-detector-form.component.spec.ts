import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProblemDetectorFormComponent} from './problem-detector-form.component';

describe('ProblemDetectorFormComponent', () => {
  let component: ProblemDetectorFormComponent;
  let fixture: ComponentFixture<ProblemDetectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemDetectorFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemDetectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
