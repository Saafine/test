import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2Component } from './test2.component';
import { Test2childModule } from './test2child/test2child.module';

describe('Test2Component', () => {
  let component: Test2Component;
  let fixture: ComponentFixture<Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test2Component],
      imports: [Test2childModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work', () => {
    const spy = spyOn(component, 'parentChild');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledWith('hey');
  });
});
