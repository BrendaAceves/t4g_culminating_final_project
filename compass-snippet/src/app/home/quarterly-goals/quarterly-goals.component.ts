import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarterly-goals',
  templateUrl: './quarterly-goals.component.html',
  styleUrls: ['./quarterly-goals.component.scss']
})
export class QuarterlyGoalsComponent implements OnInit {
  @Input() goal1 = '';
  @Input() goal2 = '';
  @Input() goal3 = '';

  currentSeason: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentSeason = this.getCurrentSeason();
  }

  getCurrentSeason(): string {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    let season = '';

    switch (true) {
      case month >= 3 && month <= 5:
        season = 'Spring';
        break;
      case month >= 6 && month <= 8:
        season = 'Summer';
        break;
      case month >= 9 && month <= 11:
        season = 'Fall';
        break;
      default:
        season = 'Winter';
        break;
    }

    return `${season} ${currentDate.getFullYear()}`;
  }
}
