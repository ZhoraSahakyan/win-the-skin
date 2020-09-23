import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordItemComponent } from './afford-item.component';

describe('AffordItemComponent', () => {
  let component: AffordItemComponent;
  let fixture: ComponentFixture<AffordItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffordItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
