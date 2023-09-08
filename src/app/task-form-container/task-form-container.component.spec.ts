import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormContainerComponent } from './task-form-container.component';

describe('TaskFormContainerComponent', () => {
  let component: TaskFormContainerComponent;
  let fixture: ComponentFixture<TaskFormContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormContainerComponent]
    });
    fixture = TestBed.createComponent(TaskFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
