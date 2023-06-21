import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { ChipListModule } from '@syncfusion/ej2-angular-buttons';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent],
  imports: [
    DragDropModule,
    BrowserModule,
    DropDownListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ChipListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
