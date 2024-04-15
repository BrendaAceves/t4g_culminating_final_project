import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the user name from the query parameter
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'];
    });
  }
}
