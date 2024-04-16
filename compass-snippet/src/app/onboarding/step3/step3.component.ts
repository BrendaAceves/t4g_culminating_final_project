import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  userName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      console.log(this.userName);
    });
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step2'], { queryParams: { name: this.userName } });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step4'], { queryParams: { name: this.userName } });
  }


}
