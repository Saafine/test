import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-test2',
  template: `
    <p>
      i am validation -> {{ validation }}
    </p>
  `,
  styles: []
})
export class Test2Component implements OnInit {
  public validation: string;

  constructor(private ngControl: NgControl) {}

  ngOnInit(): void {
    this.ngControl.statusChanges.subscribe((x) => {
      this.validation = JSON.stringify(this.ngControl.errors);
    });
  }
}
