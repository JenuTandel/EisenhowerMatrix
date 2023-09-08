import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityTaskPresentationComponent } from './priority-task-presentation.component';

describe('PriorityTaskPresentationComponent', () => {
  let component: PriorityTaskPresentationComponent;
  let fixture: ComponentFixture<PriorityTaskPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriorityTaskPresentationComponent]
    });
    fixture = TestBed.createComponent(PriorityTaskPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
