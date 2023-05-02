import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingModalComponent } from './training-modal/training-modal.component';
import { TrainingsService } from './services/trainings.service';
import { Training } from './models/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {
  trainingService = inject(TrainingsService);
  trainings: Training[] = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.trainingService
      .getAll()
      .subscribe((trainings) => (this.trainings = trainings));
  }

  async openTrainingModal() {
    const modal = await this.modalCtrl.create({
      component: TrainingModalComponent,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }
}
