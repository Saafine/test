import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test2child2',
  templateUrl: './test2child2.component.html',
  styleUrls: ['./test2child2.component.css']
})
export class Test2child2Component {
  @Input() form: FormGroup;
}
