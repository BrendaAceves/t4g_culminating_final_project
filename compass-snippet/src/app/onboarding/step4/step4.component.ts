import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
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
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step3'], {
      queryParams: {
        name: this.userName,
        firstYearGoal: this.firstYearGoal,
        fifthYearGoal: this.fifthYearGoal,
      }
    });
  }

  goToNextStep(quarterGoal1: string, quarterGoal2: string, quarterGoal3: string) {
    if (quarterGoal1.trim() !== '' && quarterGoal2.trim() !== '' && quarterGoal3.trim() !== '') {
      this.router.navigate(['/onboarding', 'step5'], {
        queryParams: {
          name: this.userName,
          firstYearGoal: this.firstYearGoal,
          fifthYearGoal: this.fifthYearGoal,
          quarterGoal1: quarterGoal1,
          quarterGoal2: quarterGoal2,
          quarterGoal3: quarterGoal3
        }
      });
    }
  }
}
