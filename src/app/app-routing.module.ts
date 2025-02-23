import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermComponent } from './term/term.component';
import { JoinContestComponent } from './join-contest/join-contest.component';
import { RankingComponent } from './ranking/ranking.component';
import { PredictionComponent } from './prediction/prediction.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'term&condition',component:TermComponent},
  {path:'join', component:JoinContestComponent},
  {path:'ranking',component:RankingComponent},
  {path:'prediction',component:PredictionComponent},
  {path:'winner', component:WinnerComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
