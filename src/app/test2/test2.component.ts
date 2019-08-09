import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Test2Base } from './test2.base';
import { TestService1Service } from './test-service1.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html'
})
export class Test2Component extends Test2Base implements OnInit {
  constructor(service: TestService1Service, injector: Injector) {
    // super(service);
    super(service, injector);
  }

  ngOnInit() {
    this.test2Base2();
  }
}
