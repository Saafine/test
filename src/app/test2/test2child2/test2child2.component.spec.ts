import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2child2Component } from './test2child2.component';

describe('Test2child2Component', () => {
  let component: Test2child2Component;
  let fixture: ComponentFixture<Test2child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
