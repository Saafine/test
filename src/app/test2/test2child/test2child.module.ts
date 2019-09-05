import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2childComponent } from './test2child.component';

@NgModule({
  declarations: [Test2childComponent],
  imports: [
    CommonModule
  ],
  exports: [Test2childComponent]
})
export class Test2childModule { }
