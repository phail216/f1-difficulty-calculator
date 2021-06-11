import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackData } from './track-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<TrackData> {
    return this.http.get<TrackData>("../assets/data.json");
  }
}
