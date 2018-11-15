import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//importing interceptor service to be used in application 
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
