import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawItmeComponent } from './withdraw-itme.component';

describe('WithdrawItmeComponent', () => {
  let component: WithdrawItmeComponent;
  let fixture: ComponentFixture<WithdrawItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
