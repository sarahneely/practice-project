import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//CUSTOME PIPES
import { SearchByPipe } from './pipes/search-by.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
