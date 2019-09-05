import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Test2childComponent } from './test2child/test2child.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, AfterViewInit {
  @ViewChild(Test2childComponent, {static: false}) childRef: Test2childComponent;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.childRef);
    this.parentChild(this.childRef.test());
  }

  parentChild(arg): void {
    return arg;
  }
}
