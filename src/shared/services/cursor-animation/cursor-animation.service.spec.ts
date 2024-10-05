import { TestBed } from '@angular/core/testing';

import { CursorAnimationService } from './cursor-animation.service';

describe('CursorAnimationService', () => {
  let service: CursorAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursorAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
