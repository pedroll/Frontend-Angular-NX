import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//plugins
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";

// ngx bootstrap
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CollapseModule} from 'ngx-bootstrap/collapse';

//components
import {HeaderComponent} from './components/header/header.component';

//rutas
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

