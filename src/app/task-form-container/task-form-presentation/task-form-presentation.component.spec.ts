import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormPresentationComponent } from './task-form-presentation.component';

describe('TaskFormPresentationComponent', () => {
  let component: TaskFormPresentationComponent;
  let fixture: ComponentFixture<TaskFormPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormPresentationComponent]
    });
    fixture = TestBed.createComponent(TaskFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
