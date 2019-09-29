import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2child2Component } from './test2child2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Test2child2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [Test2child2Component]
})
export class Test2child2Module {
}
