import { TestBed } from '@angular/core/testing';

import { MLService } from './ml.service';

describe('MLService', () => {
  let service: MLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
