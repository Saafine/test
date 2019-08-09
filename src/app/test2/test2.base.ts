import { TestService1Service } from './test-service1.service';

export abstract class Test2Base {
  private service;
  constructor(service: TestService1Service, injector) {
    this.service = injector.get(TestService1Service);
  }

  // constructor(private service: TestService1Service) {}

  test2Base2() {
    console.log('hey from abstract where we call injected service');
    this.service.test1();
  }

}
