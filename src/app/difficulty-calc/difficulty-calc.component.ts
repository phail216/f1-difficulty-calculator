import { Component, OnInit } from '@angular/core';
import { TrackDataFacade } from 'src/infrastructure/track-data.facade';

@Component({
  selector: 'app-difficulty-calc',
  templateUrl: './difficulty-calc.component.html',
  styleUrls: ['./difficulty-calc.component.scss']
})
export class DifficultyCalcComponent implements OnInit {

trackData$ = this.facade.trackData$;
  constructor(private facade: TrackDataFacade) { }

  ngOnInit(): void {
    this.facade.getData();
  }

}
