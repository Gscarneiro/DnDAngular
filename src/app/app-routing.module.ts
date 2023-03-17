import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RaceListComponent } from './race/race-list/race-list.component';
import { RaceEditComponent } from './race/race-edit/race-edit.component';

const routes: Routes = [
  { path: 'races-list', component: RaceListComponent },
  { path: 'races-edit', component: RaceEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
