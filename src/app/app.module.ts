import {CoursesComponent} from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesService} from './courses.service';
import { AppComponent } from './app.component';
import{DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    //CoursesService
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  DataService,
  CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
