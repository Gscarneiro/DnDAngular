import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RaceListComponent } from './race/race-list/race-list.component';

const routes: Routes = [
  { path: 'races-list', component: RaceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
