import { TestBed } from '@angular/core/testing';

import { PriorityTaskPresenterService } from './priority-task-presenter.service';

describe('PriorityTaskPresenterService', () => {
  let service: PriorityTaskPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriorityTaskPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
