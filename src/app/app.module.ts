import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { TreeviewModule } from 'ngx-treeview';
import { TreeModule } from 'angular-tree-component';

import { AppComponent } from './app.component';
import { DemoAngularTreeComponent } from './demo-angular-tree/demo-angular-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoAngularTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    TreeviewModule.forRoot(),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
