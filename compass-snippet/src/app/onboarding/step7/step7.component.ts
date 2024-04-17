import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss']
})
export class Step7Component implements OnInit {
  // Input Parameters
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


  goToHome() {
    this.router.navigate(['/home'], {
      queryParams: {
        name: this.userName,
        firstYearGoal: this.firstYearGoal,
        fifthYearGoal: this.fifthYearGoal,
        quarterGoal1: this.quarterGoal1,
        quarterGoal2: this.quarterGoal2,
        quarterGoal3: this.quarterGoal3,
        weeklyGoal1: this.weeklyGoal1,
        weeklyGoal2: this.weeklyGoal2,
        weeklyGoal3: this.weeklyGoal3,
      }
    });
  }
}
