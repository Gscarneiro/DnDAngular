import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Urls } from 'src/app/constants/urls';
import { Route, Router } from '@angular/router';
import { Race } from 'src/app/models/race.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css'],
})
export class RaceListComponent {
  raceList: Race[] = [];

  filters: any = {
    title: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.apiService.get(Urls.race.root).subscribe((data) => {
      _.each(data, (item) => {
        this.raceList.push(Object.assign(new Race(), item));
      });
    });
  }

  openEdition() {
    this.router.navigate(['races/edit', '']);
  }
}
