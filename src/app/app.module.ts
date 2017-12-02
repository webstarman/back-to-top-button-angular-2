import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoTopButton } from './components/go-top-button.component';
import { CommonModule } from '@angular/common';
import {Safe} from './safe-html.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GototopComponent } from './gototop/gototop.component';

@NgModule({
  declarations: [
    AppComponent,
    GoTopButton,
    Safe,
    GototopComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
