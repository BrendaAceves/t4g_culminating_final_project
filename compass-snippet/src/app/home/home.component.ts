import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string = '';
  firstYearGoal: string = '';
  fifthYearGoal: string = '';
  quarterGoal1: string = '';
  quarterGoal2: string = '';
  quarterGoal3: string = '';
  weeklyGoal1: string = '';
  weeklyGoal2: string = '';
  weeklyGoal3: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      this.firstYearGoal = params['firstYearGoal'];
      this.fifthYearGoal = params['fifthYearGoal'];
      this.quarterGoal1 = params['quarterGoal1'];
      this.quarterGoal2 = params['quarterGoal2'];
      this.quarterGoal3 = params['quarterGoal3'];
      this.weeklyGoal1 = params['weeklyGoal1'];
      this.weeklyGoal2 = params['weeklyGoal2'];
      this.weeklyGoal3 = params['weeklyGoal3'];
    });
    console.log("QuarterGoal1:", this.quarterGoal1);
    console.log("QuarterGoal2:", this.quarterGoal2);
    console.log("QuarterGoal3:", this.quarterGoal3);
    console.log("WeeklyGoal1:", this.weeklyGoal1);
    console.log("WeeklyGoal2:", this.weeklyGoal2);
    console.log("WeeklyGoal3:", this.weeklyGoal3);
  }



}
