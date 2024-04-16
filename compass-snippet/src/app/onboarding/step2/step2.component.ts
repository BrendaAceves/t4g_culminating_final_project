import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

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
      console.log(this.userName);
    });
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step1'], { queryParams: { name: this.userName } });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step3'], { queryParams: { name: this.userName } });
  }


}
