import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root',
})
export class TrainingsService {
  private readonly http = inject(HttpClient);

  public getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(`${environment.apiHost}entrenamientos/`);
  }

  public createTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(
      `${environment.apiHost}entrenamientos/`,
      training
    );
  }
}
