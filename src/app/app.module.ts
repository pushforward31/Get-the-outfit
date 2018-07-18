import {CoursesComponent} from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesService} from './courses.service';
import { AppComponent } from './app.component';
import{DataService} from './data.service';
import { RouteComponent } from './route/route.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'list', component: AppComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    RouteComponent,
    //CoursesService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  DataService,
  CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
