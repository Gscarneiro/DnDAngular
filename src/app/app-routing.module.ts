import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RaceListComponent } from './components/race/race-list/race-list.component';
import { RaceEditComponent } from './components/race/race-edit/race-edit.component';

const routes: Routes = [
  { path: 'races/list', component: RaceListComponent },
  { path: 'races/edit/:id', component: RaceEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
