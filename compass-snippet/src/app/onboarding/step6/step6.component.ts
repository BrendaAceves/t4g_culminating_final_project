import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {
  
  userName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
      console.log(this.userName);
    });
  }

  goToPreviousStep() {
    this.router.navigate(['/onboarding', 'step5'], { queryParams: { name: this.userName } });
  }

  goToNextStep() {
    this.router.navigate(['/onboarding', 'step7'], { queryParams: { name: this.userName } });
  }


}
