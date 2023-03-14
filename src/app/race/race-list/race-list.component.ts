import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css'],
})
export class RaceListComponent {
  raceList: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get('api/race').subscribe((data) => {
      //console.log(data);
      this.raceList = data;
    });
  }
}
