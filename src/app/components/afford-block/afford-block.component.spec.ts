import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordBlockComponent } from './afford-block.component';

describe('AffordBlockComponent', () => {
  let component: AffordBlockComponent;
  let fixture: ComponentFixture<AffordBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffordBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
