import { TestBed } from '@angular/core/testing';

import { BoxGuard } from './box.guard';

describe('BoxGuard', () => {
  let guard: BoxGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BoxGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
