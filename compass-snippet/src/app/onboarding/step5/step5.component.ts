import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {
  userName: string = '';
  firstYearGoal: string = '';
  fifthYearGoal: string = '';
  quarterGoal1: string = '';
  quarterGoal2: string = '';
  quarterGoal3: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      this.firstYearGoal = params['firstYearGoal'];
      this.fifthYearGoal = params['fifthYearGoal'];
      this.quarterGoal1 = params['quarterGoal1'];
      this.quarterGoal2 = params['quarterGoal2'];
      this.quarterGoal3 = params['quarterGoal3'];
    });
    console.log("QuarterGoal1:", this.quarterGoal1);
    console.log("QuarterGoal2:", this.quarterGoal2);
    console.log("QuarterGoal3:", this.quarterGoal3);
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step4'], {
      queryParams: {
        name: this.userName,
        firstYearGoal: this.firstYearGoal,
        fifthYearGoal: this.fifthYearGoal,
      }
    });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step6'], {
      queryParams: {
        name: this.userName,
        firstYearGoal: this.firstYearGoal,
        fifthYearGoal: this.fifthYearGoal,
        quarterGoal1: this.quarterGoal1,
        quarterGoal2: this.quarterGoal2,
        quarterGoal3: this.quarterGoal3,
      }
    });
  }


}
