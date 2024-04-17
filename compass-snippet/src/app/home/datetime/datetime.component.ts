import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {

  constructor() { } 

  today: number = Date.now();
  month: number = 0; // Remove initialization here
  ordinal: string = '';
  private timerSubscription: Subscription | undefined;
  
  ngOnInit(): void {
    this.updateDate(); // Call once to initialize

    // Update date every second
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateDate();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the timer when the component is destroyed
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private updateDate(): void {
    this.today = Date.now();
    const date = new Date(this.today);
    this.month = date.getMonth() + 1;
    
    switch(this.month) {
      case (1):
        this.ordinal = 'st,';
        break;
      case (2):
        this.ordinal = 'nd,';
        break;
      case (3):
        this.ordinal = 'rd,';
        break;
      default:
        this.ordinal = 'th,';
        break;
    }
  }
}