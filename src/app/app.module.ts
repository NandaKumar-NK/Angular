import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent,
    CustomerlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
