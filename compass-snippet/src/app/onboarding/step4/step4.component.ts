import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  userName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      console.log(this.userName);
    });
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step3'], { queryParams: { name: this.userName } });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step5'], { queryParams: { name: this.userName } });
  }

}
