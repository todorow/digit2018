import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InfoSideComponent} from './info-side.component';

describe('InfoSideComponent', () => {
  let component: InfoSideComponent;
  let fixture: ComponentFixture<InfoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
