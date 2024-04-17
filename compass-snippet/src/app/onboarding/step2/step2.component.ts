import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  userName: string = '';
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
    });
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step1'], { queryParams: { name: this.userName } });
  }

  goToNextStep(firstYearGoal: string, fifthYearGoal:string) {
    // Assign values from input fields to firstYearGoal and fifthYearGoal
    console.log(firstYearGoal);
    if (firstYearGoal.trim() !== '' && fifthYearGoal.trim() !== '') {
      this.router.navigate(['/onboarding', 'step3'], {
        queryParams: {
          name: this.userName,
          firstYearGoal: firstYearGoal,
          fifthYearGoal: fifthYearGoal,
        }
      });
    }
  }
}