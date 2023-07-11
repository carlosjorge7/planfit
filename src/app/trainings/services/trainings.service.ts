import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainingsService {
  private readonly http = inject(HttpClient);

  public getTrainings() {
    return this.http.get<any>(`${environment.apiHost}entrenamientos/`);
  }
}
