import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Race } from 'src/app/models/race.model';
import { Urls } from 'src/app/constants/urls';
import { SIZES } from 'src/app/constants/sizes';
import { TYPES } from 'src/app/constants/types';
import { faXmark, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { Feature } from 'src/app/models/feature.model';
import { FeatureEditComponent } from '../../feature/feature-edit/feature-edit.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import * as _ from 'underscore';

@Component({
  selector: 'app-race-edit',
  templateUrl: './race-edit.component.html',
  styleUrls: ['./race-edit.component.css'],
})
export class RaceEditComponent {
  bsModalRef?: BsModalRef;
  faXmark = faXmark;
  faCheck = faCheck;
  faPen = faPen;
  sizes = SIZES;
  types = TYPES;

  selectedId: string | null = null;
  race: Race = new Race();

  constructor(private apiService: ApiService, private route: ActivatedRoute, private modalService: BsModalService) {}

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

  openModalEditionFeature(index: number | undefined = undefined) {
    var feature: Feature = new Feature();

    if (index != undefined) {
      feature = JSON.parse(JSON.stringify(this.race.Features[index]));
    }

    const options: ModalOptions = {
      initialState: {
        feature: feature,
      },
    };

    this.bsModalRef = this.modalService.show(FeatureEditComponent, options);

    this.bsModalRef.content.event.subscribe((item: { data: Feature; res: number }) => {
      if (item.res == 200) {
        this.race.Features = [...this.race.Features, item.data];
      }

      if (item.res == 201 && index != undefined) {
        this.race.Features[index] = item.data;
        this.race.Features = [...this.race.Features];
      }
    });
  }

  deleteFeature(id: string) {
    this.race.Features = _.reject(this.race.Features, function (race) {
      return race.id == id;
    });
  }
}
