import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-term-goals',
  templateUrl: './long-term-goals.component.html',
  styleUrls: ['./long-term-goals.component.scss']
})
export class LongTermGoalsComponent implements OnInit {
  @Input() firstYearGoal = '';
  @Input() fifthYearGoal = '';

  constructor() { }

  ngOnInit(): void {
  }

}
