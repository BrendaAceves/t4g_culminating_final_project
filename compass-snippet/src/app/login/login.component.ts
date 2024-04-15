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

  navigateToHome(userName: string) {
    if (userName.trim() === '') {
      // If input is empty, navigate to home with default name
      this.router.navigate(['/home'], { queryParams: { name: 'Guest' } });
    } else {
      // If input is not empty, navigate to home with entered name
      this.router.navigate(['/home'], { queryParams: { name: userName } });
    }
  }
}
