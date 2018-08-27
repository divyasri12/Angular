import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContentComponent } from './content/content.component';
import { CareersComponent } from './careers/careers.component';
import { NotFoundComponent } from './notfound.component';
import { DepartmentsComponent } from './services/departments/departments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContentComponent,
    CareersComponent,
    NotFoundComponent,
    DepartmentsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'home', component: HomeComponent},      
      {path:'services', component:ServicesComponent},
      {path:'content', component:ContentComponent},
      {path:'careers', component:CareersComponent},
      {path:'departments/:Id/:DepartmentName/:Employees', component:DepartmentsComponent},
      {path:'**', component: NotFoundComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
