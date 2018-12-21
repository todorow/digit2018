import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddProblemComponent } from './modal-add-problem.component';

describe('ModalAddProblemComponent', () => {
  let component: ModalAddProblemComponent;
  let fixture: ComponentFixture<ModalAddProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
