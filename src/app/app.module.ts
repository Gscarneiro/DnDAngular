import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceListComponent } from './components/race/race-list/race-list.component';
import { RaceEditComponent } from './components/race/race-edit/race-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureEditComponent } from './components/feature/feature-edit/feature-edit.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent, RaceListComponent, RaceEditComponent, FeatureEditComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, BrowserAnimationsModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
