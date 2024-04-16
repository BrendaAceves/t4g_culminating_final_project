import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOnboarding(userName: string) {
    if (userName.trim() === '') {
      // If input is empty, navigate to onboarding with default name
      this.router.navigate(['/onboarding'], { queryParams: { name: 'Guest' } });
    } else {
      // If input is not empty, navigate to onboarding with entered name
      this.router.navigate(['/onboarding'], { queryParams: { name: userName } });
    }
  }
}
