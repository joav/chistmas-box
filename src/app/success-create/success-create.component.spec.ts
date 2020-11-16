import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCreateComponent } from './success-create.component';

describe('SuccessCreateComponent', () => {
  let component: SuccessCreateComponent;
  let fixture: ComponentFixture<SuccessCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
