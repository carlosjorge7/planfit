import { Component, Input, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Training } from '../models/training';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-training-modal',
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss'],
})
export class TrainingModalComponent implements OnInit {
  @Input() training?: Training;

  isUpdate = false;

  trainingForm!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private readonly trainingService: TrainingsService
  ) {}

  ngOnInit() {
    this.trainingForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.training) {
      console.log(this.training);
      this.isUpdate = true;
      this.trainingForm.patchValue(this.training);
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async onSubmitTraining() {
    if (this.trainingForm.valid) {
      if (this.isUpdate) {
        const updateTraining: Training = {
          id: this.training?.id,
          title: this.trainingForm.value.title,
          description: this.trainingForm.value.description,
        };

        // const res = await this.trainingService.update(updateTraining);
        // console.log(res);

        this.modalCtrl.dismiss(updateTraining);
      } else {
        const newTraining: Training = {
          title: this.trainingForm.value.title,
          description: this.trainingForm.value.description,
        };
        this.trainingService.createTraining(newTraining).subscribe((res) => {
          console.log(res);
        });

        this.modalCtrl.dismiss(newTraining);
      }
    }
  }
}
