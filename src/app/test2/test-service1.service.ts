import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService1Service {
  test1() {
    console.log('service test 1');
  }
}
