import { Injectable } from '@angular/core';
import { TrackData } from './track-data';
import { Observable, BehaviorSubject } from 'rxjs';
import { TrackDataService } from './track-data.service';

@Injectable({
  providedIn: 'root'
})
export class TrackDataFacade {
    private trackDataSubject: BehaviorSubject<TrackData> = new BehaviorSubject<TrackData>(
    {
        version: 0,
        tracks: []
    });

    public trackData$:Observable<TrackData> = this.trackDataSubject.asObservable();

  constructor(private service:TrackDataService) { }

  getData(): void{
    this.service.getData().subscribe(data => {
        this.trackDataSubject.next(data)
    });
  }
}