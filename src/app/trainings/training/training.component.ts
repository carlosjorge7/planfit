import { Component, Input, inject } from '@angular/core';
import { Training } from '../models/training';
import { TrainingsService } from '../services/trainings.service';
import { TrainingModalComponent } from '../training-modal/training-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
  @Input() training!: Training;

  trainingService = inject(TrainingsService);

  constructor(private modalCtrl: ModalController) {}

  async onDelete(training: Training) {
    const res = await this.trainingService.delete(training);
    console.log(res);
  }

  async onUpdate(training: Training) {
    const modal = await this.modalCtrl.create({
      component: TrainingModalComponent,
      componentProps: { training },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
  }
}
