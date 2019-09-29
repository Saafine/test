import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';
import { Test2childModule } from './test2child/test2child.module';
import { Test2child2Module } from './test2child2/test2child2.module';

@NgModule({
  declarations: [Test2Component],
  imports: [
    Test2childModule,
    Test2child2Module,
    CommonModule
  ],
  exports: [Test2Component]
})
export class Test2Module { }
