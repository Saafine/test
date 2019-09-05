import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2childComponent } from './test2child.component';

describe('Test2childComponent', () => {
  let component: Test2childComponent;
  let fixture: ComponentFixture<Test2childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
