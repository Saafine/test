import { Component, OnInit } from '@angular/core';
// https://github.com/angular/components/blob/master/src/material/checkbox/checkbox.ts
export type Constructor<T> = new(...args: any[]) => T;


export interface CanTest {
  test: boolean;
}
export type CanTestConstructor = Constructor<CanTest>;

export function mixinTest<T extends Constructor<{}>>(base: T): CanTestConstructor & T {
  return class extends base {
    test = false;
    constructor(...args: any[]) { super(...args); }
  };
}

export interface CanTest2 {
  test2: string;
}
export type CanTest2Constructor = Constructor<CanTest2>;

export function mixinTest2<T extends Constructor<{}>>(base: T): CanTest2Constructor & T {
  return class extends base {
    test2 = 'lol';
    constructor(...args: any[]) { super(...args); }
  };
}


class TestBase {
  testBase = '123';
}

// const _MatCheckboxMixinBase =
//   mixinTabIndex(mixinColor(mixinTest(mixinDisabled(MatCheckboxBase)), 'accent'));

const testMixinBase = mixinTest2(mixinTest(TestBase));

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component extends testMixinBase implements OnInit {
  value = 'init';

  ngOnInit(): void {
    console.log(this.test);
    console.log(this.testBase);
    console.log(this.test2);
  }
}
