import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Race } from 'src/app/models/race.model';
import { Urls } from 'src/app/constants/urls';
import { SIZES } from 'src/app/constants/sizes';
import { TYPES } from 'src/app/constants/types';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Feature } from 'src/app/models/feature.model';
import { FeatureEditComponent } from '../../feature/feature-edit/feature-edit.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-race-edit',
  templateUrl: './race-edit.component.html',
  styleUrls: ['./race-edit.component.css'],
})
export class RaceEditComponent {
  bsModalRef?: BsModalRef;
  faXmark = faXmark;
  faCheck = faCheck;
  sizes = SIZES;
  types = TYPES;

  selectedId: string | null = null;
  addingFeature: boolean = false;
  newFeature: Feature = new Feature();
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

  openModalEditionFeature(feature: Feature = new Feature()) {
    this.addingFeature = false;
    this.race.Features.push(this.newFeature);

    const options: ModalOptions = {
      initialState: {
        feature: feature,
      },
    };

    this.bsModalRef = this.modalService.show(FeatureEditComponent, options);

    this.bsModalRef.content.event.subscribe((res: { data: Feature }) => {
      this.race.Features.push(res.data);
    });
  }
}
