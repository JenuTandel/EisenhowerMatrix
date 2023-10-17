import { TestBed } from '@angular/core/testing';

import { DropdownOverlayService } from './dropdown-overlay.service';

describe('DropdownOverlayService', () => {
  let service: DropdownOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
