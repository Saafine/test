import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Test2Module } from './test2/test2.module';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    Test2Module,
    BrowserModule,
    Test2Module,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
