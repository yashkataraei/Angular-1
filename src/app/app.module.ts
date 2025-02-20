import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContestComponent } from './home/contest/contest.component';
import { AboutComponent } from './about/about.component';
import { TermComponent } from './term/term.component';
// import { Ripple, initMDB } from "mdb-ui-kit";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContestComponent,
    AboutComponent,
    TermComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Ripple,
    // initMDB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
