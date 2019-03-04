import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowService } from './show.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent,
    ShowDetailComponent,
    ShowDataComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'current-show',component:CurrentShowComponent},
      {path:'show-data/:id',component:ShowDataComponent},
      
      
    ])
    
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
