import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// plugins
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// ngx bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { HeaderComponent } from './components/header/header.component';

// rutas
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
