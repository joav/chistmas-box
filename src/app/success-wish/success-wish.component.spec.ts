import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessWishComponent } from './success-wish.component';

describe('SuccessWishComponent', () => {
  let component: SuccessWishComponent;
  let fixture: ComponentFixture<SuccessWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
