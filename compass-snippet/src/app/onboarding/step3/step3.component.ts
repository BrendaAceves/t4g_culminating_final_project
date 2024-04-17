import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  userName: string = '';
  firstYearGoal: string = '';
  fifthYearGoal: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      this.firstYearGoal = params['firstYearGoal'];
      this.fifthYearGoal = params['fifthYearGoal'];
    });
    console.log("First Year Goal (Step 3):", this.firstYearGoal);
    console.log("5th Year Goal (Step 3):", this.fifthYearGoal);
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step2'], { queryParams: { name: this.userName } });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step4'], {
      queryParams: {
        name: this.userName,
        firstYearGoal: this.firstYearGoal,
        fifthYearGoal: this.fifthYearGoal,
      }
    });
  }
}
