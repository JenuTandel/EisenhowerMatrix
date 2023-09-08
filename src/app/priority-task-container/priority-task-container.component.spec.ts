import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityTaskContainerComponent } from './priority-task-container.component';

describe('PriorityTaskContainerComponent', () => {
  let component: PriorityTaskContainerComponent;
  let fixture: ComponentFixture<PriorityTaskContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriorityTaskContainerComponent]
    });
    fixture = TestBed.createComponent(PriorityTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
