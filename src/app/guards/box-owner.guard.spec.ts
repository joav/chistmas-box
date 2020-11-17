import { TestBed } from '@angular/core/testing';

import { BoxOwnerGuard } from './box-owner.guard';

describe('BoxOwnerGuard', () => {
  let guard: BoxOwnerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BoxOwnerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
