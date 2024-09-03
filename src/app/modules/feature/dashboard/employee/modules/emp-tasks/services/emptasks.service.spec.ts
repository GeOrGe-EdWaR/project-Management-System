import { TestBed } from '@angular/core/testing';

import { EmptasksService } from './emptasks.service';

describe('EmptasksService', () => {
  let service: EmptasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
