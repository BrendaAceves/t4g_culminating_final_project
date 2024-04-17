import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-goals',
  templateUrl: './weekly-goals.component.html',
  styleUrls: ['./weekly-goals.component.scss']
})
export class WeeklyGoalsComponent implements OnInit {
  @Input() goal1 = '';
  @Input() goal2 = '';
  @Input() goal3 = '';

  currentWeek: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentWeek = this.getCurrentWeek();
  }

  getCurrentWeek(): string {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
    const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)); // Saturday

    const startDateString = this.formatDate(firstDayOfWeek);
    const endDateString = this.formatDate(lastDayOfWeek);

    return `${startDateString} - ${endDateString}`;
  }

  formatDate(date: Date): string {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  }
}
