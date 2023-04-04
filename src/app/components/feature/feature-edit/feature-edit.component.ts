import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Feature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.css'],
})
export class FeatureEditComponent implements OnInit {
  feature: Feature = new Feature();
  title: string = 'Feature';
  event: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  save() {
    var res = 201;

    if (!this.feature.id) {
      this.feature.id = crypto.randomUUID();
      res = 200;
    }

    this.event.emit({ data: this.feature, res: res });
    this.bsModalRef.hide();
  }
}
