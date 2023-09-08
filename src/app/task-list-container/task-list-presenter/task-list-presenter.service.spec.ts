import { TestBed } from '@angular/core/testing';

import { TaskListPresenterService } from './task-list-presenter.service';

describe('TaskListPresenterService', () => {
  let service: TaskListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
