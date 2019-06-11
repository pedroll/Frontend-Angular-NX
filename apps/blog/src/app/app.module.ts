import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//plugins
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";

// ngx bootstrap
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CollapseModule} from 'ngx-bootstrap/collapse';

//components
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
