import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
