import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPresentationComponent } from './task-list-presentation.component';

describe('TaskListPresentationComponent', () => {
  let component: TaskListPresentationComponent;
  let fixture: ComponentFixture<TaskListPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListPresentationComponent]
    });
    fixture = TestBed.createComponent(TaskListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
