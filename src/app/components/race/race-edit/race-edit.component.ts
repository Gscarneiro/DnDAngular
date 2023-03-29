import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Race } from 'src/app/models/race.model';
import { Urls } from 'src/app/constants/urls';
import { SIZES } from 'src/app/constants/sizes';
import { TYPES } from 'src/app/constants/types';

@Component({
  selector: 'app-race-edit',
  templateUrl: './race-edit.component.html',
  styleUrls: ['./race-edit.component.css'],
})
export class RaceEditComponent {
  selectedId: string | null = null;

  addingFeature: boolean = false;

  sizes = SIZES;
  types = TYPES;

  race: Race = new Race();

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id');

    if (this.selectedId) this.get(this.selectedId);
  }

  get(id: string) {
    this.apiService.get(Urls.race.withId, { id: id }).subscribe((data) => {
      this.race = Object.assign(new Race(), data);
    });
  }

  onSubmit() {}

  addFeature() {
    this.addingFeature = true;
  }
}
