import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadiesshoeComponent } from './ladiesshoe/ladiesshoe.component';
import { MenshoeComponent } from './menshoe/menshoe.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  {path:"", component:ShoesComponent },
  { path : 'menshoe', component:MenshoeComponent},
  { path : 'home', component:ShoesComponent},
  { path :'ladiesshoe',component:LadiesshoeComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
