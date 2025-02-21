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
import { JoinContestComponent } from './join-contest/join-contest.component';
import { JoinComponent } from './join-contest/join/join.component';
import { RankingComponent } from './ranking/ranking.component';
import { Contenst1Component } from './ranking/contenst1/contenst1.component';
import { PredictionComponent } from './prediction/prediction.component';
// import { Ripple, initMDB } from "mdb-ui-kit";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContestComponent,
    AboutComponent,
    TermComponent,
    JoinContestComponent,
    JoinComponent,
    RankingComponent,
    Contenst1Component,
    PredictionComponent
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
