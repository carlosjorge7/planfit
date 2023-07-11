import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingModalComponent } from './training-modal/training-modal.component';
import { TrainingsService } from './services/trainings.service';
import { Training } from './models/training';
import { UsersService } from '../users/services/users.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {
  private readonly trainingService = inject(TrainingsService);

  private readonly userService = inject(UsersService);

  trainings: Training[] = [
    { id: 'string', name: 'string', description: 'string' },
    { id: 'string', name: 'string', description: 'string' },
    { id: 'string', name: 'string', description: 'string' },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    console.log(this.userService.getToken());
    this.trainingService.getTrainings().subscribe((res) => {
      console.log(res);
    });
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
