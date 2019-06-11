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
import {InicioComponent} from './pages/inicio/inicio.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {LoginComponent} from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InicioComponent, RegistroComponent, LoginComponent],
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
