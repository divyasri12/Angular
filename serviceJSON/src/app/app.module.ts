import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ServicejsonService } from './servicejson.service';
import { NewComponent } from './new/new.component'
import { NewService } from './new/newservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule
  ],
  providers: [ServicejsonService, NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
