import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2Component } from './test2.component';
import { Test2childModule } from './test2child/test2child.module';
import { Test2childComponent } from './test2child/test2child.component';

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
    component.childRef = {
      test: () => 'hey3'
    } as Test2childComponent;
    const spy = spyOn(component, 'parentChild');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledWith('hey3');
  });

  it('should work too', () => {
    const spy = spyOn(component, 'parentChild');
    component.ngAfterViewInit();
    expect(spy).toHaveBeenCalledWith('hey');
  });
});
