import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingsPageRoutingModule } from './trainings-routing.module';

import { TrainingsPage } from './trainings.page';
import { TrainingModalComponent } from './training-modal/training-modal.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TrainingsPage, TrainingModalComponent, TrainingComponent],
})
export class TrainingsPageModule {}
