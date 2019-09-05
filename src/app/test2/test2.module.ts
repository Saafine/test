import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';
import { Test2childModule } from './test2child/test2child.module';

@NgModule({
  declarations: [Test2Component],
  imports: [
    Test2childModule,
    CommonModule
  ],
  exports: [Test2Component]
})
export class Test2Module { }
