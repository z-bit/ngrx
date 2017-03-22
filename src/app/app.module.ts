import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRouting } from './app.routing';

import { AppComponent } from './containers/app.component';
import { HomeComponent } from './containers/home.component';
import { ComponentsModule } from './components/components.module';


//import { BooksModule } from './module.books/books.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
      
  //  BooksModule,
    ComponentsModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
