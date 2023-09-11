import { TestBed } from '@angular/core/testing';

import { DataCommunicationsService } from './data-communications.service';

describe('DataCommunicationsService', () => {
  let service: DataCommunicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommunicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
