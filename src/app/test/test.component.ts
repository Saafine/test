import { Component, ElementRef, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TestComponent),
  multi: true,
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [VALUE_ACCESSOR]
})
export class TestComponent implements ControlValueAccessor {
  public value;
  onChange = (_: any) => {};
  onTouched = () => {};

  constructor() {}
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
  }
}
