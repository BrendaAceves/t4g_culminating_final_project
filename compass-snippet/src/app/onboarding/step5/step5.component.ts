import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {
  userName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      console.log(this.userName);
    });
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step4'], { queryParams: { name: this.userName } });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step6'], { queryParams: { name: this.userName } });
  }



}
