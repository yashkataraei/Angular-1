import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermComponent } from './term/term.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'term&condition',component:TermComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
