import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css'],
})
export class RaceListComponent {
  raceList: any = [];

  filters: any = {
    title: '',
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.apiService.get('api/race').subscribe((data) => {
      console.log(this.filters.title);
      this.raceList = data;
    });
  }
}
