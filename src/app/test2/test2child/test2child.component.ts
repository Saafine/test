import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2child',
  templateUrl: './test2child.component.html',
  styleUrls: ['./test2child.component.css']
})
export class Test2childComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  test() {
    return 'hey';
  }
}
