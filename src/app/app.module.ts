import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindDriverProcessComponent } from './find-driver-process/find-driver-process.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { HighlightDirective } from './directive/highlight.directive';
@NgModule({
  declarations: [AppComponent, FindDriverProcessComponent, HighlightDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
