import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from '@smart-webcomponents-angular/chart';
import { AccordionModule } from 'smart-webcomponents-angular/accordion';

import { AppComponent } from './app.component';
import 'd3stencilproject';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartModule, AccordionModule],
  // exports: [Components],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
