import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2childComponent } from './test2child.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Test2childComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [Test2childComponent]
})
export class Test2childModule { }
