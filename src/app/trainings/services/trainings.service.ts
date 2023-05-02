import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Training } from '../models/training';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingsService {
  constructor(private readonly firestore: Firestore) {}

  public create(training: Training) {
    const trainingRef = collection(this.firestore, 'trainings');
    return addDoc(trainingRef, training);
  }

  public getAll(): Observable<Training[]> {
    const trainingRef = collection(this.firestore, 'trainings');
    return collectionData(trainingRef, { idField: 'id' }) as Observable<
      Training[]
    >;
  }

  getOne() {}

  update(training: Training) {
    // MAL: Revisar
    const trainingRef = doc(this.firestore, `trainings/${training.id}`);
    return updateDoc(trainingRef, { training });
  }

  public delete(training: Training) {
    const trainingRef = doc(this.firestore, `trainings/${training.id}`);
    return deleteDoc(trainingRef);
  }
}
