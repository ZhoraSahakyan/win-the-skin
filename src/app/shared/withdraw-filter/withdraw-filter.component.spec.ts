import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFilterComponent } from './withdraw-filter.component';

describe('WithdrawFilterComponent', () => {
  let component: WithdrawFilterComponent;
  let fixture: ComponentFixture<WithdrawFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
