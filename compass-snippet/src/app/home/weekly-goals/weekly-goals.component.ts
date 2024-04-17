import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-goals',
  templateUrl: './weekly-goals.component.html',
  styleUrls: ['./weekly-goals.component.scss']
})
export class WeeklyGoalsComponent implements OnInit {
  @Input() goal1 = '';
  @Input() goal2 = '';
  @Input() goal3 = '';
  constructor() { }

  ngOnInit(): void {
  }

}
